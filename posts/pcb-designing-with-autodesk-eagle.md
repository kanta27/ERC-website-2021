---
title: PCB Designing with Autodesk Eagle
author: Kaushal Jadhav
hero_image: "/ERC-website-2021/static/pcb_cover.png"
date: 2021-11-24T12:30:00Z

---
PCB is an acronym for Printed Circuit Board. It is a board with many lines and pads that connects various points together using conductive pathways. Traces are etched on copper sheets to make these pathways and the sheets are then laminated on a non-conductive substrate board.

![How to Choose a PCB Assembly Company?](https://lh4.googleusercontent.com/pPgZQZbihhUpxO70xv9PP8EwR9tqFN4bv0JyNs_FkV0M-OHis0--nG1rluyRb1ExkmCoPCnXFK6aEDArU40f12HM8fnrjGDpwsZgz19pgvfUUK9ONSRHt_TlNq_Mcck_ZP-sDkH2 =342x228)

# Why are PCBs so important?

PCBs were invented in 1936.  
Life before 1936:

![Mass of wire wrap](https://lh4.googleusercontent.com/k8QxIDuiy4dlqQIjUFm6xYDOvnO7b6dFiFpxJzK34fGk60mvkfIz8ed9Hx01pMdKwQOMJ0KoJ7VAriNzQyHwjUZkjCL88MWg4sMDQuAU3vffApuFEahkDnhs87_LHYAb85touQ32 =335x248)  
Imagine you are an electrical engineer tasked with debugging this!  
And don’t even get me started on maintaining such circuits

# Composition and structure

The composition of a PCB is basically like a layered cake

![](https://lh5.googleusercontent.com/oMSl3aE-kyobSGg9UTY7HhJkXdV4vSPOrtV5f02_px-4lru158l2XH23df4r8LDHs8R0hKX-JgrtdUAeUpfip2xCSzzMwR-2cUzrxy677ffz_61QQ7C8frMhwwo1Q9bb7r7dCGda =434x238)

**Silkscreen:** The silkscreen adds letters, numbers, and symbols to the PCB that allow for easier readability.

**Substrate (FR4):** The base material, or substrate, is usually fiberglass. This solid core gives the PCB its rigidity and thickness but keeps it flexible at the same time.

**Soldermask:** This layer gives the PCB its distinctive green colour and is overlaid onto the copper layer to insulate the copper traces from accidental contact with other metal, solder, or conductive bits.

**Copper:** Copper is laminated on both sides of the board with heat and adhesive. It electrically connects the electronic components and signals.

# Understanding PCB terminology and basic terms

Now that we’ve got an idea of what a PCB structure is, let’s learn to read a PCB.

PCBs involve a lot of overwhelming terminology and jargon. The good news is you don’t need to understand every bit of it. A basic understanding will suffice to start with.

Here’s a link to a doc referring to the same:

# Autodesk EAGLE

There are many PCB CAD softwares out there. But we will be covering EAGLE in this tutorial.

_So what’s so special about EAGLE?_

EAGLE is lightweight (50-200MB of disk space), free for students, has cross-platform support and most importantly has a great active community.

**_Download, License and Install:_**

EAGLE is free to [download](https://www.autodesk.com/products/eagle/free-download) and install with a student’s license. Create/Log-on to your Autodesk account with your college ID and grab the version that matches your operating system.

EAGLE installs just like most programs. The download is an executable file; open it and follow the installation instructions. You can find the download link on A

**_Libraries:_**

Included with EAGLE is an impressive list of part libraries. These hundreds of libraries might be very useful for high end industrial PCB designing; but they end up becoming very overwhelming for us beginners.

The [SparkFun EAGLE libraries](https://github.com/sparkfun/SparkFun-Eagle-Libraries) are a good starting point. They are easy to understand and are also frequently updated.

After downloading, navigate to Documents\\EAGLE\\libraries and paste the folder to add them to your resources.

**_Creating your first project in EAGLE:_**

Alright now, finally we can boot-up EAGLE and get started!

We'll start by making a new **project folder** for our design. In the control panel, under the "Projects" tree, right click on the directory where you want the project to live and select **"New Project"** and give it a nice descriptive name.

The project folder will house both our schematic and board design files.

These are the yin and the yang of EAGLE. They should be used together to create the finished product that is a functional PCB design.

# The Schematic editor:

To add a schematic to a project folder, right-click the folder, hover over **"New"** and select **"Schematic"**. A new blank window will immediately pop-up.

Welcome to the schematic editor!

Schematic designing in EAGLE is like adding a few parts, wiring them, then adding some more and then wiring them again.

Adding Parts to a Schematic

The ADD tool ![](https://lh6.googleusercontent.com/k5PoEdMk-eVCTfA2-nTYyK5npHUWP7jq6AakNp-e1hj5zmtG1bR8yhdTQWZRESGNkSd-5Vv5t6hWcHuBBwgyK3bEAmAmqlDRUUHYeXAkFP3yWK1ZA9V5Lj3i5B8Yvue0S2sxvUYs =28x27) opens up a library navigator, where you can expand specific libraries and look at the parts it holds. The most important functionality of the ADD tool is probably the search bar.

The search is very literal, so don't misspell stuff! A very crucial tip is the use of asterisks (*) before and after every component. This makes the search more lenient.

For example, if you search for _atmega328_ you should find a single part in the library, but if you search _*atmega328*_ (note asterisks before and after), you'll discover two more versions of the IC (because they're actually named "ATMEGA328_P_").

Add all the components, connectors and the power inputs using this tool.

After placing the parts, if you need to move them around, use the MOVE tool -- ![](https://lh4.googleusercontent.com/P8BQ3vxngVCQXkJCUaASahbphHrgc7xPM9lV-3AqeLiEswaxa1v70AzOm9yW31TJANCv6kouIgvcvkpxNrR-hYb-fPG1xr4_xGUS1ewOYYBOXjRMTGWiY3aE_HMioHq7v3NN2fa3 =28x27)

**_Wiring Up the Schematic:_**

There's one major caveat here before we start: even though we're wiring parts on the schematic, we not going to use the WIRE tool --![](https://lh6.googleusercontent.com/W0C69UpRUAJ_0oEcIT5FORb7mBBXMePNjBJ-YHHjr3ki0l4gpcTrYH8nfRCgdTIgoJSVl77Ayb-QzyoOQDBXlsqZVhrr5-sE01Ig_5qM_o88vumwfbXnXqbdZNLIFHxzDw7SKC87 =28x27) -- to connect them together. Instead, we'll use the NET tool -- ![](https://lh6.googleusercontent.com/jcvQigiJ3QWBj4P4Eez7eyGlZjuUiKHvX0Xcx6BGaG00EQJt2ICpYTOYwI42H5ABx42gBk65ER5SWGTqC6I5Xz6KhQm2PEUxfEa8BXVVQniIkzB1VQ09bD3747C4da7vFRF2nPT6 =28x27). The WIRE tool would be better-named as a line-drawing tool, NET does a better job of connecting components.

Hover over the very end of a pin (as close as possible, zoom in if you have to), and left-click once to start a wire. Now a green line should be following your mouse cursor around. To terminate the net, left-click on either another pin or a net. Start by routing the easiest and closest ones first.

Suppose you encounter a pin that is to be connected to a component all the way on the other side. You could do it, it would work, but it'd be really ugly. Instead, we use the NAME tool -- ![](https://lh6.googleusercontent.com/IQmGO5O0q-aBz2OgCPJTEgFJASwPPhbYk9VmQ5qfMrDNxr4v_rkz0LdW6_mBf0JjZNcNHqA7UYq8IvEEq8orD1gxLHYs0a6bsSOapu92OFAUn99ZoSNAxpgNj013b99Zvg2APSYo =28x27) and the LABEL tool -- ![](https://lh5.googleusercontent.com/6MBpNnGmk-n6WKpkgFUpam_scRnM6sQXMm9NvSK8L7x4eIdSu7-QjhD3FUkFFq8E161-gxjaT7kfAXRf1uIG7WjYEHAOZ8gXeXPVrbmGvOsfgn2t7RW4MaKo4l0xeFzCFDdfMMVP =28x27).

Begin by starting a net at a pin, just as you've been doing. Terminate the net by left-clicking a few grid-lengths over to the right of the pin. Then, instead of routing to another pin, just hit ESC to finish the route. With the NAME tool selected now click on the net and give it a short descriptive name. In the same way, create an unfinished net connected to the component and give it the same name as before. This should result in a warning dialog, asking you if you want to connect this net to all of the other nets with the same name. Thanks for looking out for us EAGLE, but in this case _Yes_ we do want to connect them.

After naming a net, you should use the LABEL tool -- ![](https://lh5.googleusercontent.com/6MBpNnGmk-n6WKpkgFUpam_scRnM6sQXMm9NvSK8L7x4eIdSu7-QjhD3FUkFFq8E161-gxjaT7kfAXRf1uIG7WjYEHAOZ8gXeXPVrbmGvOsfgn2t7RW4MaKo4l0xeFzCFDdfMMVP =28x27) -- to add a text label for better readability.

Some other useful tools:

* The GROUP tool -- ![](https://lh5.googleusercontent.com/ZdURE3sdGkOQVKQvf2KUs7aInaOcNwODuJXOpK16pYSKgx6DeH5-rii4NGpOpp3gE_pSIpciQRZ_1rV_rmAfTDIyYO0Rhk5dN4oPgJytRhrcGfWwOGXZnAOkxrChceQ19fKfICxY =28x27)

In order to perform any action on a group, you have to select the tool, then **hold down CTRL** and **right-click the group**. After you CTRL+right-click, the tool will operate on the group just as it does a single component.

* The SHOW tool -- ![](https://lh4.googleusercontent.com/gL737hdiBqI6CR5E_mEw3432TFPI1CZLjXQ_MkOL8sEMfJyKygQGapGxRbiqcn9A7MHN8OhfJqIcG7CCCKqpMOjWcTizaHaMoyUPQJb5kKkORvLBAPayYqHAbbh8FCI7HiiU8CX_ =28x26)

If you use SHOW on a net, every pin it's connected to should light up verifying that pins across your schematic are connected correctly.

* COPY -- ![](https://lh5.googleusercontent.com/eSbYxy1vk9UFJe_jSodLidEW3TYCd_L18cSZV2OqP8DKek0BJmxtd6kiyt8OwC7x7iCZdnXKnlRzqBEXLqY3II2wytwRUjeZhpogSFUbK-ZXEqq1yS81BJYiA50QwjtJDgGpQGQ3 =28x27)-- and PASTE -- ![](https://lh4.googleusercontent.com/0tqi3vwAg3yCzZGDEE8Va3M6eXseircle1NcGRip1Mn7THDR9ma5SuAFU9SvbdjlrC0pcYfq1LEb1wMfj0xMCC-GygD6LhlYK0m38rMlBn2TYvsM7zdqRrRq36v4WN2xykMT-2E2 =28x27) -- tools

EAGLE's Copy and Paste tools don't work exactly like other copy/paste tools you may have encountered before. Copy actually performs both a copy and paste when it's used while Paste can only be used to paste a **group** that has previously been copied to your clipboard.

# The Board Editor:

EAGLE's board designer is where a good portion of the magic happens.

When you are done with the basic schematic of your design, simply click on the _Generate/Switch to Board_ command -- ![](https://lh3.googleusercontent.com/Ako4OgdlujI_tEPHxpviihwkrB_nvQCFr_EQPust6gAjACjNPpwbQ6jPjxWs5ylkkhTfdLCptyUk4RO8Ptt1QsfaCc-T9ZDGOHPHelEq1UD4hs8OqfaltV-7g_x9uB4GOR6cNMbR =28x27). A Board Editor window will open with all your parts stacked on one another connected with golden air-wires ready to be placed and routed.

Before getting started with laying down the components, it is imperative to first adjust the grid. Click on the GRID icon -- ![](https://lh5.googleusercontent.com/C18w6zVL38BzdvIYndBWt3uGENOZwDfhElO7Y9eXphUHI8ml8Xz3FdGKNWLzArn44mQPu4q0XpjmUgFiMP3INr-CtjmUNRnTNT8kBu0bL96CkdemhXCFxASfjYZnxgxIoAFkOV8T =28x27) and adjust the size. Generally, a 0.05" grid, and 0.005" alternate grid is a good size but do check it according to your specific requirements.

**_Laying the Board:_**

Use the MOVE tool ![](https://lh4.googleusercontent.com/P8BQ3vxngVCQXkJCUaASahbphHrgc7xPM9lV-3AqeLiEswaxa1v70AzOm9yW31TJANCv6kouIgvcvkpxNrR-hYb-fPG1xr4_xGUS1ewOYYBOXjRMTGWiY3aE_HMioHq7v3NN2fa3 =28x27) to arrange your parts, right-clicking will rotate the part. The way you arrange your parts has a huge impact on how easy or hard the next step will be.

Here are a few things to keep in mind:

* **Don’t overlap parts**: All parts need to have some clearance between them to ensure the signals don’t short circuit.
* **Minimize intersecting air-wires**: Limiting criss-crossing air-wires will make routing _much_ easier in the long run.
* **Part placement requirements**: Some parts may require special considerations like the power connector will always be placed on the edge of the board.
* **Cost vs. Effort: The tighter your board is the cheaper it is, but it also makes routing that much harder.**

**_Routing the Board_**

Routing is probably the most fun part of PCB designing. It’s almost like solving a puzzle.

Click on the ROUTE tool and route away! On a 2-layer board, you can route the wires in either red or blue colour. Each colour specifying a different copper layer that you can switch using your middle-mouse button. You can also change the Bend style and Width of your routes. Usually, you will want to keep it 45 degrees and 0.01”.

![Good and bad trace overlaps](https://lh6.googleusercontent.com/MP6o88Q6_ExU_Y0QXM8REQptg0CWrnPnssw2nifoUYJqkdpwbRUjmcKEpnXOQ2MdLI58Yw37_EYAju13DZXnE0xkkaxgcxUD3ISw6YXr7bGDQbQ5stHWzbDqhTovvfu4drM3x4FC =409x290)

Another important thing to remember while routing is to avoid overlaps of any sort. If traces do cross each other on opposite sides of the board, it's perfectly. That's why there are two layers!

**_Vias:_**

Vias are a cool workaround to avoid overlaps. It allows you to travel between the red and blue layers. But don’t get carried away because more vias mean more money.

**_The Alternate grid:_**

If you need more precision, hold down the ALT key to access the alternate grid. But do make sure to keep enough route clearance. A good rule of thumb is to keep enough space between two routes to run another one between them.

**_The Auto-Router:_**

Cheater! If you are short on time or having trouble routing the PCB yourself you can use EAGLE’s Autorouter ![](https://lh6.googleusercontent.com/owphrvcuSYLP0G2PihibXaoaVVgVV7Aq8sVQpZfItKKkGYmo1vGBmra2U7LIW2J4XnIZcVm8PXgXzjQ7Vma2NvtZvDhfr2ESuSnYhSKPVMJU50lZ6wq8XQmCRQNqy7RaRPn5Q_1G =28x27). It gets the job done but has no regard for your cost constraints.

**_Checking for Errors:_**

There are two checks to perform before we can package the PCB and send it to the fabrication house.

1. **Ratsnest:**

The RATSNEST tool ![](https://lh5.googleusercontent.com/VLSDUeSNsfoC84yb_TAvGEQgK2wjKWPEUTvBnaDBrLI-sCK1zPI48-xfq0Dq17RIivg3CGjd1L5qlKt2G9ZP8FyLLAkeSNrUUvtCfiupLVyQdw81mEfsSJiJhxbtZVAQ59PXGw0b =28x27) checks if you have routed everything and say the sweetest words a PCB designer can ever hear: ![Ratsnest -- Nothing to do!](https://lh6.googleusercontent.com/cDTtzXPpdfYWXTIAYW8eMC2PPXVagozMudpzIu183yrHJNhQHFapW2_b04WpmJvRD1upO80a67mOrNulxnbA2SFElUnBk2xbzsIcFfO0j051bWUCfLM88K16wJVwI-8ryASYDBUZ =330x28)

2. **Design Rule Check (DRC)**

The DRC ![](https://lh6.googleusercontent.com/PYkCCWrKpUe_fu1QxoGDbzcWiYsI36jzD1Wuldymxxf-yr30ljuYgk--QjFmk0PT0v4U0B8WtwzpJGvVG8vTlHcb042jIscQETD9VO4TleSjry378GOui46TG2O7cQxL0XaRSL0V =28x27) can provide all sorts of errors like if a trace is too close to either another trace or a via, or two different signal traces are overlapping each other or even if a trace, pad, or via is intersecting with (or too close to) a dimension line.