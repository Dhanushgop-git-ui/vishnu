# Instagram Reel Setup Guide

## How to Add Your Instagram Reel

Since Instagram doesn't allow direct embedding, you'll need to download the video first:

### Method 1: Download the Reel

1. **Go to your Instagram reel**: https://www.instagram.com/reel/DHD6NBIp_LY/?igsh=MXNlemNib2hjMWpvYw==

2. **Download the video** using one of these methods:
   - Use a browser extension like "Video Downloader"
   - Use online tools like SaveInsta, DownloadGram, or InstaDownloader
   - Use mobile apps that can save Instagram content

3. **Rename the downloaded file** to `reel-video.mp4`

4. **Place it in the `/public/` folder** of this project

5. **Optional**: Add a poster image (thumbnail) named `video-poster.jpg` to `/public/`

### Method 2: Screen Recording (Alternative)

If downloading doesn't work:

1. **Open the Instagram reel** on your phone or computer
2. **Screen record** the video playing
3. **Edit the recording** to remove UI elements
4. **Save as** `reel-video.mp4` in `/public/`

### Method 3: Re-upload to Your Own Hosting

1. **Download the video** using Method 1
2. **Upload to YouTube** as unlisted/private
3. **Use YouTube embed** instead
4. **Or upload to Vimeo, Cloudinary, etc.**

## File Structure After Setup

```
public/
├── reel-video.mp4     (your Instagram reel)
├── video-poster.jpg   (optional thumbnail)
└── ...
```

## Why This Approach?

- ✅ **Full control** over video playback
- ✅ **Better performance** than embeds
- ✅ **Works offline** and loads faster
- ✅ **No external dependencies**
- ✅ **Professional presentation**

## Legal Note

Make sure you have the rights to use the video content in your portfolio. Since it's your own Instagram reel, this should be fine!

---

**Need help?** Let me know once you've added the video file and I can help with any adjustments!