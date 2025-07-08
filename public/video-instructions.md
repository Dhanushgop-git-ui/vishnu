# Adding Your Video to the Portfolio

## Quick Setup Instructions

1. **Download your video** from Google Drive to your computer
2. **Rename the file** to `video.mp4` 
3. **Place the file** in the `/public/` folder of this project
4. **Update the code** to use the local video file

## Code Update Required

Once you've added your video file to `/public/video.mp4`, replace the placeholder content in `CinematicPortfolio.tsx` with:

```jsx
<video
  className="w-full h-full object-cover"
  autoPlay
  muted
  loop
  playsInline
>
  <source src="/video.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

## Why This Approach?

- **Google Drive links don't work** for direct video embedding due to CORS restrictions
- **Local files are reliable** and load faster
- **Better performance** for your portfolio visitors
- **Full control** over video quality and format

## Alternative: Use a Video Hosting Service

If you prefer not to include the video file in your project:

1. Upload to **YouTube** or **Vimeo**
2. Use their embed codes
3. Or use a service like **Cloudinary** or **AWS S3** for direct video hosting

Let me know if you need help with any of these steps!