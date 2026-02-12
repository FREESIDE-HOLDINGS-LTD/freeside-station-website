.PHONY: all
all: website push

.PHONY: all-docker
all-docker: website-docker push

.PHONY: video
video:
	ffmpeg -framerate 24 -pattern_type glob -i 'model/_render/*.png' -c:v libsvtav1 -crf 35 -filter:v scale=1280:-1 public/video.mp4

.PHONY: website
website:
	source /usr/share/nvm/init-nvm.sh && yarn build

.PHONY: website-docker
website-docker:
	sudo docker build --output type=local,dest=./dist .

.PHONY: push
push:
	@echo "Copy..."
	rsync -z -r --delete --progress ./dist/ server:/home/filip/server/docker/freeside-station/public
	@echo "Update..."
	ssh -t server 'cd /home/filip/server/docker/freeside-station; make update; ~/scripts/clear_nginx_cache'
