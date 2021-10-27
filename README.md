# Material Tokens

Material Design now supports the [Design System Package (DSP)](https://github.com/AdobeXD/design-system-package-dsp)  for importing and exporting [Material Design Tokens](http://m3.material.io/foundations/design-tokens/overview) within the [Material Theme Builder](http://material.io/material-theme-builder). DSP can be used in designer and developer workflow tools and Material Component libraries. Let’s dive into how you can use Material Tokens (DSP) within the [VSCode extension](https://marketplace.visualstudio.com/items?itemName=Adobe.xd) to generate code.


## Getting Started

Make sure you have the latest version of VSCode installed on your machine. VSCode is free to download and is open source.

[Download VSCode](https://code.visualstudio.com/)

After VSCode is installed, navigate to the marketplace on the extensions tab and search for Adobe.

![alt_text](/assets/image1.png "image_tooltip")

[Download Adobe XD VSCode extension](https://marketplace.visualstudio.com/items?itemName=Adobe.xd)

Click on install and you may have to reopen or reload VSCode. After the extension is successfully installed, you can open Adobe XD by searching for Adobe in the command palette or clicking the “XD” icon in the bottom right.

![alt_text](/assets/image2.png "image_tooltip")


After the plugin opens it should look like the following screenshot.

![alt_text](/assets/image3.png "image_tooltip")



## Opening a DSP

Download a customized DSP from the [Material Theme Builder](http://material.io/material-theme-builder) or default Material Theme values from [this repo](https://goo.gle/material-tokens) and save it to your computer.

Open up the folder in VSCode by either dragging it onto the open window or selecting “Open Folder”.

![alt_text](/assets/image4.png "image_tooltip")


Open the Adobe XD plugin and select “Edit Package” on the bottom left, then select “Select Folder”. There should be a notification on the bottom left that should say “Existing package found…” and click on “Open”.

![alt_text](/assets/image5.png "image_tooltip")


## Exploring the DSP

With the DSP opened in the plugin you should see the following screenshot.

![alt_text](/assets/image6.png "image_tooltip")


The Material Tokens (DSP) is made up of a few sections (Light, Dark, Default, Palette, Typography).


## Generating Code

After inspecting the DSP you can generate code in the form of tokens to be used in your application.

Select “Start Editing” and then “Finish Editing” to trigger code generation. If it is the first time you are doing it there will be a notification to install Style Dictionary.

![alt_text](/assets/image7.png "image_tooltip")


Select “Install” then you will see another notification asking to export tokens.

![alt_text](/assets/image8.png "image_tooltip")


Select “Export tokens” then you will see a notification asking you to open the folder.

![alt_text](/assets/image9.png "image_tooltip")


Opening the folder you will see the following sub directories.

![alt_text](/assets/image10.png "image_tooltip")

This directory is located in the current directory under a newly generated folder “dist”.

![alt_text](/assets/image11.png "image_tooltip")


Opening up the “variables.css” for example you will see the following flat list of tokens used to theme your application.

![alt_text](/assets/image12.png "image_tooltip")


The “android/colors.xml” should look similar.

![alt_text](/assets/image13.png "image_tooltip")


Using the Material Tokens (DSP) will ensure your styles are shared throughout your designer and developer workflow. Learn more about [Material Design Tokens](http://m3.material.io/foundations/design-tokens/overview).
