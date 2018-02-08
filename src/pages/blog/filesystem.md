---
templateKey: 'project'
path: /blog/filesytem
title: 'Envisioning the future of File Systems'
intro: 'Exploring the UX of the file system'
date: 2013-10-03
---

_HOW TAGS & SMART SEARCH COULD CHANGE THE WAY WE ORGANIZE PERSONAL DATA_

From early days of the personal computers until the invention of the iPhone, the
way we handle our personal data remained largely unchanged: A system of
directories and numerous levels of sub-directories commonly referred to as the
’File System’. The file system features a clear hierarchy. It is formal,
organized. Designed for machines. The machines workin two layers:

1. Software
2. File System

Software creates & edits files, then stores them in the file system.
If you want to edit a file, you look it up in the file system.

> "The file system was designed for software, not humans."

Most peoples file systems are in a state of chaos. We are evidently
not capable of maintaining a strictly formal system. Data often gets lost in deeply nested sub-directories.

Apple recognized the weakness of the file system. So with the **iPhone**, they
unified the software and the file system. There are **only apps**. Apps create
files and store them internally. If there’s something to do, you don’t have to
look up the file, just open the app.

By doing so, Apple solved one problem but created another: files are now trapped
in individual apps. Neither can you edit files across apps, nor is there a way
to easily overview your data across apps.

Recently, [Daniel Abernathy](https://medium.com/@dabernathy89) wrote a
[brilliant piece](https://medium.com/i-m-h-o/b4a6ccf0b253) on how tagging will
replace the photo-album. He called out for two major principles:
**Semi-Automatic Tagging** and **Smart Search**. He recognized that
organizing data should be done behind the scenes. Semi-automatic tagging works
by automatically analyzing the content of a photo (via location, time, OCR,
face-recognition, …) and attaching an array of tags to describe the photo. In a
second step you can then search/organize your photos in natural language.

I believe that these principles can be applied not only to photo-albums, but to
the entire file system. You’ll still access data through an app, which then
stores the data in a central directory. The app automatically attaches tags,
describing the content of the file, specifications, the context, access
permissions etc…

Data would be organized by tags. Tags are added automatically by both the
respective app and by a system background-agent that maps out relations between
files by analyzing content, tags and usage patterns.

This also opens the possibility to integrate data within services like Spotify into the file system UX.

Say, you’re working on a project about the war in Syria. The project includes
multiple types of data such as documents, photos and videos and involves
multiple apps. This data is stored both on your harddrive and in various cloud services. By analyzing the tags, content and usage pattern, the system
could map out context and relation of all files involved in the project. Just
search for “Syria War” and all your files show up. Automatically organized by
tags.
