# GDSC Phenikaa Homepage

Based on [NeonMint](https://neonmint.efeele.dev/)

# Build and run on server

- Make sure Docker is preinstalled on the server
- Modify the port in `compose.yaml` to a free port, or leave as default (4444) 

```bash
git clone https://github.com/GDSC-Phenikaa/intro.git
docker compose up -d 
```

- Setup reverse proxy as you would, please use [Caddy](https://caddyserver.com/) or [NGINX](https://nginx.org/en/)

## Caddy configuration sample

```caddy
gdsc.phenikaa-uni.edu.vn

reverse_proxy :4321
```

## Nginx configuration sample 
```conf
server {
    listen 80;
    listen [::]:80;
    # 443 if needed

    server_name gdsc.phenikaa-uni.edu.vn;
        
    location / {
        proxy_pass localhost:4321;
        include proxy_params;
    }
}
```