.PHONY: video
video:
	ffmpeg -framerate 24 -pattern_type glob -i 'model/_render/*.png' -c:v libsvtav1 -crf 35 public/video.mp4
