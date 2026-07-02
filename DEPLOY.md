# 静态页面部署说明

这个项目是一个纯静态站点，不需要 `npm run build`。

你真正需要部署的内容只有这些：

- `index.html`
- `styles.css`
- `script.js`
- `assets/`

项目里我已经帮你准备好了两个部署辅助文件：

- `deploy/nginx.conf.example`
- `deploy/package-static-site.ps1`

下面这些通常不需要传到线上：

- `tmp/`
- `output/`
- `design-output/`
- `stitch/`
- `素材/`
- `package.json`
- `package-lock.json`

## 方案一：部署到 Linux + Nginx 服务器

### 1. 在服务器上准备目录

```bash
sudo mkdir -p /var/www/birthday_of_love
sudo chown -R $USER:$USER /var/www/birthday_of_love
```

### 2. 上传文件

在你本机项目目录执行：

```bash
scp -r index.html styles.css script.js assets your_user@your_server_ip:/var/www/birthday_of_love/
```

如果你想先打一个整包再上传，可以在本机 PowerShell 运行：

```powershell
powershell -ExecutionPolicy Bypass -File .\deploy\package-static-site.ps1
```

运行后会生成：

- `deploy-dist/site/`
- `deploy-dist/birthday_of_love-static.zip`

你可以把压缩包上传到服务器后解压到站点目录。

如果你有域名，也可以先传到任意目录，再通过面板或 Nginx 指向这个目录。

### 3. 配置 Nginx

在服务器创建站点配置。你可以直接参考项目里的 `deploy/nginx.conf.example`，也可以使用下面这个内容：

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    root /var/www/birthday_of_love;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(css|js|png|jpg|jpeg|gif|svg|ico|webp|mp3)$ {
        expires 7d;
        add_header Cache-Control "public";
    }
}
```

如果你只是用 IP 访问，可以先把 `server_name` 改成你的服务器 IP。

### 4. 启用配置

Ubuntu / Debian 常见做法：

```bash
sudo ln -s /etc/nginx/sites-available/birthday_of_love /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

如果你是直接编辑 `/etc/nginx/nginx.conf` 或宝塔面板里的站点配置，这一步按你的方式保存并重载即可。

## 方案二：宝塔面板部署

如果你的服务器装了宝塔，这是最省事的：

1. 新建一个站点，域名填你的域名或服务器 IP。
2. 站点根目录设置成类似 `/www/wwwroot/birthday_of_love`。
3. 把 `index.html`、`styles.css`、`script.js` 和 `assets/` 上传到这个目录。
4. 打开站点配置，确保首页文件包含 `index.html`。
5. 保存后直接访问域名或 IP 测试。

## HTTPS

如果你有域名，建议直接上 HTTPS。

### 用 Certbot（Nginx）

```bash
sudo apt update
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

执行完后，`Certbot` 通常会自动帮你改好 Nginx 配置。

如果你用的是宝塔，直接在面板里申请 Let’s Encrypt 证书更简单。

## 访问前检查

部署完成后，重点检查这几项：

1. 首页能正常打开。
2. `assets/` 里的图片和音频都能加载出来。
3. 浏览器控制台没有 `404`。
4. 页面动画正常，说明 CDN 脚本加载成功。

## 这个项目的两个注意点

### 1. 它依赖外部 CDN

当前页面会从外网加载这些资源：

- Google Fonts
- `gsap`
- `matter-js`
- `script.js` 里的远程图片

如果你的用户访问外网不稳定，这些资源可能加载失败，表现为：

- 字体变成默认字体
- 动画或物理效果异常

如果你愿意，我可以下一步帮你把这些外部依赖改成本地文件，这样部署到服务器后会更稳。

### 2. 不需要后端

这个页面目前不依赖数据库、接口或 Node 服务，所以不需要：

- `pm2`
- `node server.js`
- `Docker`（除非你自己想用）

本质上它就是“把静态文件放到 Web 服务器目录里”。

## 最短可执行版本

如果你现在想最快上线，直接按这 4 步走：

1. 服务器装好 `Nginx`。
2. 创建 `/var/www/birthday_of_love` 目录。
3. 上传 `index.html`、`styles.css`、`script.js`、`assets/`。
4. 配好 `root` 指向这个目录并重载 `Nginx`。

如果你把你的服务器环境告诉我，比如：

- `Ubuntu + Nginx`
- 宝塔面板
- `CentOS`
- 只有公网 IP、还没域名

我可以直接给你一套一条条能复制执行的命令。
