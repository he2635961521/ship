export const getFirstImageToVideo = (imageUrl, callback) => {
  if (imageUrl) {
    const video = document.createElement('video') // 也可以自己创建video
    video.src = imageUrl // url地址 url跟 视频流是一样的
    video.crossOrigin = 'anonymous' // 解决跨域问题，也就是提示污染资源无法转换视频
    video.currentTime = 1 // 第一帧

    video.oncanplay = () => {
      let canvas = document.createElement('canvas') // 获取 canvas 对象
      const ctx = canvas.getContext('2d') // 绘制2d

      canvas.width = video.clientWidth ? video.clientWidth : 300 // 获取视频宽度
      canvas.height = video.clientHeight ? video.clientHeight : 168 //获取视频高度
      // 利用canvas对象方法绘图
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
      // 转换成base64形式
      const videoFirstImgsrc = canvas.toDataURL('image/png') // 截取后的视频封面
      callback(videoFirstImgsrc);
      video.remove();
      canvas.remove();
    }
  }
}