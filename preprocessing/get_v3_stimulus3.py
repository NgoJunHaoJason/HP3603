'''
Get non-moving stimulus version 3
'''
import cv2


assets_path = '/home/burntice/0_repositories/HP3603/assets/'
source_video_path = assets_path + 'v3_stimulus2.mp4'
destination_image_path = assets_path + 'v3_stimulus3.png'

video_capture = cv2.VideoCapture(source_video_path)

if not video_capture.isOpened():
    print(f'Error opening video: {video_path}')

while video_capture.isOpened():
    success, frame = video_capture.read()

    if not success:
        print('failed to read frame from video')
        break

    cv2.imwrite(destination_image_path, frame)
    break

print('done')

video_capture.release()
