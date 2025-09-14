# 🚀 IONOS Hosting Deployment Guide for ASOCEITY Portfolio

This guide will help you deploy your React portfolio to IONOS web hosting platform.

## 📋 Prerequisites

1. **IONOS Account**: Sign up at [ionos.com](https://www.ionos.com)
2. **Hosting Package**: Web hosting or WordPress hosting package
3. **Domain**: Your custom domain (comes with IONOS packages)
4. **FTP Client**: FileZilla or IONOS File Manager

## 🎯 Step-by-Step Deployment

### Step 1: Access IONOS Control Panel

1. Login to [my.ionos.com](https://my.ionos.com)
2. Navigate to **"Websites & Domains"**
3. Select your domain/hosting package
4. Access **"File Manager"** or get **FTP credentials**

### Step 2: Get FTP Access Details

In your IONOS control panel:

1. Go to **"Websites & Domains"** → Your domain
2. Click **"FTP Access"** or **"Web Space"**
3. Note these credentials:
   - **FTP Server**: Usually `ftp.yourdomain.com` or specific IONOS server
   - **Username**: Your FTP username
   - **Password**: Your FTP password
   - **Port**: 21 (standard) or 22 (SFTP)

### Step 3: Configure Environment Variables

Your domain is already configured for **asociety.tech**:

```env
# Production configuration for asociety.tech
VITE_API_BASE_URL=https://asociety.tech/api
VITE_CONTACT_ENDPOINT=https://asociety.tech/api/contact

# Alternative: If you set up a subdomain for API
# VITE_API_BASE_URL=https://api.asociety.tech/api
# VITE_CONTACT_ENDPOINT=https://api.asociety.tech/api/contact
```

**Note**: The build has already been created with these settings!

### Step 4: Rebuild for Production

```bash
# In your project directory
npm run build
```

### Step 5: Upload Files to IONOS

#### Option A: Using IONOS File Manager (Recommended)

1. Login to [my.ionos.com](https://my.ionos.com)
2. Go to **"Websites & Domains"** → Your domain
3. Click **"File Manager"**
4. Navigate to the **root directory** (usually `/` or `/html`)
5. **Upload all files** from your `dist` folder:
   - Upload `index.html` to root
   - Upload `assets` folder with all contents
   - Upload `.htaccess` file
   - Upload `vite.svg`

#### Option B: Using FileZilla FTP

1. **Download FileZilla**: [filezilla-project.org](https://filezilla-project.org)
2. **Connect to IONOS**:
   - Host: Your IONOS FTP server
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21

3. **Navigate to web directory**:
   - Usually `/` or `/html` or `/public_html`
   - Look for existing `index.html` or similar

4. **Upload Files**:
   - Select ALL files from your `dist` folder
   - Drag and drop to the web root directory
   - Ensure structure:
     ```
     / (web root)
     ├── index.html
     ├── .htaccess
     ├── vite.svg
     └── assets/
         ├── index-*.css
         ├── index-*.js
         ├── vendor-*.js
         ├── three-*.js
         └── other assets...
     ```

### Step 6: Configure .htaccess for IONOS

IONOS servers work well with standard Apache configurations. Your `.htaccess` file should include:

```apache
# React Router support for SPA
RewriteEngine On

# Handle client-side routing
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Security headers
Header always set X-Frame-Options DENY
Header always set X-Content-Type-Options nosniff
Header always set Referrer-Policy "strict-origin-when-cross-origin"

# HTTPS redirect (if SSL is enabled)
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>
```

### Step 7: Enable SSL Certificate

1. In IONOS control panel, go to **"SSL Certificates"**
2. Enable **"SSL Certificate"** for your domain
3. Choose **"Let's Encrypt"** (free) or purchase premium SSL
4. Wait for activation (usually 5-15 minutes)

### Step 8: Set Up Database (For Backend API)

If you need a database for your Laravel backend:

1. Go to **"Databases"** in IONOS control panel
2. Create a **MySQL database**
3. Note the connection details:
   - Database name
   - Username
   - Password
   - Host (usually localhost or specific IONOS DB server)

### Step 9: Deploy Backend API (Optional)

If you have a Laravel backend:

1. Create a subdirectory `/api` in your web root
2. Upload Laravel files to this directory
3. Configure database connection
4. Set up proper PHP version in IONOS control panel

## 🔧 IONOS-Specific Configurations

### PHP Settings
- IONOS supports PHP 7.4, 8.0, 8.1, 8.2
- Configure PHP version in control panel
- Enable required extensions (curl, mysqli, etc.)

### Email Configuration
- IONOS provides email services
- Configure SMTP settings for contact forms
- Use IONOS mail servers for better deliverability

### Performance Optimization
- Enable **"Performance Mode"** in IONOS control panel
- Use IONOS CDN if available in your package
- Enable **"SiteAccelerator"** for faster loading

## 🧪 Testing Your Deployment

1. **Visit your website**: `https://asociety.tech`
2. **Test all functionality**:
   - ✅ Landing page loads correctly
   - ✅ Terminal interface works
   - ✅ Navigation between sections
   - ✅ 3D animations render properly
   - ✅ Contact form submits (if backend is set up)
   - ✅ Mobile responsiveness
   - ✅ SSL certificate is active (green lock icon)

## 🔧 Troubleshooting

### Common IONOS Issues

1. **500 Internal Server Error**:
   - Check `.htaccess` syntax
   - Verify file permissions (644 for files, 755 for directories)
   - Check PHP error logs in control panel

2. **404 Errors on Page Refresh**:
   - Ensure `.htaccess` is uploaded and active
   - Check RewriteEngine settings

3. **Assets Not Loading**:
   - Verify all files in `assets/` folder are uploaded
   - Check file permissions and paths

4. **Contact Form Issues**:
   - Configure SMTP settings in IONOS
   - Check PHP version compatibility
   - Verify API endpoints are accessible

### Performance Issues

1. **Slow Loading**:
   - Enable compression in `.htaccess`
   - Use IONOS CDN
   - Optimize images
   - Enable browser caching

2. **Database Slow**:
   - Optimize database queries
   - Use IONOS database optimization tools
   - Consider upgrading hosting package

## 📊 IONOS Hosting Features

### Included with Most Packages:
- ✅ Free SSL certificates
- ✅ Daily backups
- ✅ Email hosting
- ✅ MySQL databases
- ✅ PHP support
- ✅ FTP/SFTP access
- ✅ File Manager
- ✅ 24/7 support

### Optional Add-ons:
- CDN services
- Advanced security
- Premium SSL certificates
- Additional storage/bandwidth

## 📁 Final File Structure on IONOS

```
/ (web root)
├── index.html              # Main application entry
├── .htaccess              # Server configuration
├── vite.svg               # Favicon
├── assets/                # Optimized production assets
│   ├── index-*.css       # Compiled styles
│   ├── index-*.js        # Main application bundle
│   ├── vendor-*.js       # React and dependencies
│   ├── three-*.js        # Three.js 3D library
│   └── robot-face.svg    # Your SVG assets
└── api/                   # Backend API (optional)
    ├── index.php          # Laravel entry point
    ├── app/               # Laravel application
    └── vendor/            # Laravel dependencies
```

## ✅ IONOS Deployment Checklist

- [ ] IONOS hosting account active
- [ ] Domain configured and propagated
- [ ] FTP credentials obtained
- [ ] Production build completed (`npm run build`)
- [ ] Environment variables updated with your domain
- [ ] All files uploaded to web root
- [ ] `.htaccess` file uploaded and configured
- [ ] SSL certificate enabled
- [ ] Website accessible at your domain
- [ ] All pages and features working correctly
- [ ] Contact form tested (if applicable)
- [ ] Mobile responsiveness verified
- [ ] Performance optimizations enabled

## 🚀 Post-Deployment Steps

1. **DNS Configuration**: Ensure your domain points to IONOS servers
2. **Analytics**: Add Google Analytics or similar tracking
3. **SEO**: Submit sitemap to search engines
4. **Monitoring**: Set up uptime monitoring
5. **Backups**: Configure automatic backups in IONOS control panel

## 📞 Support Resources

- **IONOS Help Center**: [help.ionos.com](https://help.ionos.com)
- **24/7 Phone Support**: Available in most regions
- **Community Forums**: IONOS community discussions
- **Knowledge Base**: Extensive documentation library

---

🎉 **Congratulations!** Your ASOCEITY Portfolio is now live on IONOS!

Visit: `https://asociety.tech`

*Professional hosting with enterprise-grade performance and support!*
