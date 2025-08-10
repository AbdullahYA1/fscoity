import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeJSBackground = ({ setIsLoaded }) => {
  const canvasRef = useRef();

  useEffect(() => {
    if (!canvasRef.current) return;

    let scene, camera, renderer, particles;
    let animationId;

    try {
      // Scene setup
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        alpha: true,
        antialias: false, // Disable antialias for better performance
      });

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);

      // Create simple particle system with proper geometry cleanup
      const particleGeometry = new THREE.BufferGeometry();
      const particleCount = 300; // Reduced further for better performance
      const positions = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 100; // Reduced spread
      }

      particleGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );

      // Use basic material to avoid shader issues
      const particleMaterial = new THREE.PointsMaterial({
        color: 0x00ff41,
        size: 1.0,
        sizeAttenuation: false, // Prevent size calculation issues
        transparent: true,
        opacity: 0.6,
      });

      particles = new THREE.Points(particleGeometry, particleMaterial);
      scene.add(particles);

      // Position camera
      camera.position.z = 50;

      // Simple animation loop with error handling
      const animate = () => {
        try {
          animationId = requestAnimationFrame(animate);

          // Slow particle rotation
          if (particles) {
            particles.rotation.y += 0.0005;
            particles.rotation.x += 0.0003;
          }

          if (renderer && scene && camera) {
            renderer.render(scene, camera);
          }
        } catch (error) {
          console.warn("WebGL rendering error:", error);
          // Stop animation on error to prevent spam
          if (animationId) {
            cancelAnimationFrame(animationId);
          }
        }
      };

      animate();

      // Handle resize with error handling
      const handleResize = () => {
        try {
          if (camera && renderer) {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
          }
        } catch (error) {
          console.warn("Resize error:", error);
        }
      };

      window.addEventListener("resize", handleResize);
      setTimeout(() => setIsLoaded(true), 1000);

      // Cleanup function
      return () => {
        try {
          window.removeEventListener("resize", handleResize);
          
          if (animationId) {
            cancelAnimationFrame(animationId);
          }

          if (particles) {
            if (particles.geometry) {
              particles.geometry.dispose();
            }
            if (particles.material) {
              particles.material.dispose();
            }
            scene.remove(particles);
          }

          if (renderer) {
            renderer.dispose();
          }
        } catch (error) {
          console.warn("Cleanup error:", error);
        }
      };
    } catch (error) {
      console.error("Three.js initialization error:", error);
      setIsLoaded(true); // Still set loaded even if 3D fails
    }
  }, [setIsLoaded]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(circle at center, #001100 0%, #000000 100%)",
      }}
    />
  );
};

export default ThreeJSBackground;
