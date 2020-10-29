'''
Generate constant speed stimulus version 3
'''
import cv2


# original:
# 25 fps
# 40 degree/s
#
# -->
# 1.6 degree/frame
# -->
#
# new:
# 360 degree/s
# 225 fps

assets_path = '/home/burntice/0_repositories/HP3603/assets/'
source_video_path = assets_path + 'spinning_dots_40deg_sec.mp4'
destination_video_path = assets_path + 'v3_stimulus2.mp4'

new_frame_rate = 225  # 225 frames per second
new_width, new_height = 400, 400

video_capture = cv2.VideoCapture(source_video_path)

fourcc = cv2.VideoWriter_fourcc(*'mjpg')  # video codec
video_writer = cv2.VideoWriter(
    destination_video_path,
    fourcc,
    new_frame_rate,
    (new_height, new_width)
)

if not video_capture.isOpened():
    print(f'Error opening video: {video_path}')

frame_num = 0
while video_capture.isOpened():
    success, frame = video_capture.read()

    if not success:
        break

    # take 9 seconds of frames for 360 degree rotation, without interference
    frame_num += 1
    if frame_num <= 225:
        continue
    elif frame_num > 450:
        break

    height, width, _ = frame.shape

    frame = frame[
        (height-new_height)//2: (height+new_height)//2,
        (width-new_width)//2: (width+new_width)//2
    ]

    video_writer.write(frame)

print('done')

video_capture.release()
video_writer.release()
