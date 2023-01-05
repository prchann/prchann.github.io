# Docker

## Send Signal

Docker default send `SIGTERM` to stop container. You may listen and process it in the process.

You may send a signal to container as you want.

```bash
# send `HUP` signal to container
# nginx reload config file
docker kill -s HUP nginx
```

## 参考

* [Learning Containers From The Bottom Up](https://iximiuz.com/en/posts/container-learning-path/)
