const products = [
    {
        name: "Куртка осень",
        price: "5 490 ₽",
        images: [
            "https://sun9-5.userapi.com/s/v1/ig2/6wf5pwqw5_rSsLZ6or3tpdf9dry93yB9RjagDj5DGxZN8WSU_j0aNvyV_wyu69-jRvLT32lECR2h9hNEiQSt0dRc.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=BtSKtbu5s0ZwQJFIIcM_1Zy3T4gHmSJfLktZm6JXA9c&cs=510x680",
            "https://sun9-32.userapi.com/s/v1/ig2/sqYbwZiT6kkj2a2pEpmuExCxY9mAmT1qvWmgqQ_3zpaLF-Z9J9-K4zmiKwaey7gskuyO9jf_sHt49IFIBhcIswp6.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=_nWzDQpwz9KbWCiI1LRfzv1gOrlAQmZ3DlbXg8fG0h0&cs=510x680"
        ]
    },
    {
        name: "Брюки ",
        price: "2 511 ₽",
        images: [
            "https://sun9-11.userapi.com/s/v1/ig2/8wIKwQgrQkLSPo0tzP5eAOvkMeA2PMsb92-tOnsxQqFG81feJS50sb3HLEMa4td57x456CgWxn4ecqy7k66TDndP.jpg?quality=95&as=32x50,48x75,72x112,108x168,160x250,240x374,360x561,480x749,540x842,640x998,720x1123,1006x1569&from=bu&u=OZws8yFmYTcELZHE7z9_h_mTUXTS8ac9fT77pdIwyLw&cs=510x795",
            "https://sun9-24.userapi.com/s/v1/ig2/rpONhAhB84zN7ESKYgTp-4silu2VZn6GNQnBHQ85onvmHfxlRLl2Y2C7Q2kZacSnXmeo7topXq6FqOXs7-91tL9G.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=j3iD6HqhHcJ2enhcQBWDP_RPSBM80Qpmu5FaFnf3EAg&cs=510x680"
        ]
    },
    {
        name: "Рубашка",
        price: "1 690 ₽",
        images: [
            "https://sun9-73.userapi.com/s/v1/ig2/chqpfUH6A7uyAlq6R-sszoJSjEa9u_1nH06gybf1HUtmDBPkvgHtvUKk3fpeQPb0KEzVQM6koM7AmULUAuw79rwC.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=swY6pA1NYReE_AXwRV4aUPDsK_GafkdZywwHUVs84Bc&cs=510x680",
            "https://sun9-19.userapi.com/s/v1/ig2/IIT3wfhE15IsJ1u6nOugqy0y9suE4vZs3Nsz6frEzW13f6ZpbR2dvagM0ssKhzy8IGbVGGI_K7JHrOrFWrRCy5cU.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=0oRT02IG9kH7gbtUlWTwiGuxjdrP8fVOMUC4L2RIfwE&cs=510x680",
            "https://sun9-39.userapi.com/s/v1/ig2/MG_RQyedYK8NORANYO3d1MZn_48Tqd5sLl09G81bpnmJysDQZ4-8hzyMesmpXeg5ytmQ3-N1JDEM-SRGxU_imAFi.jpg?quality=95&as=32x63,48x94,72x142,108x212,160x315,240x472,360x708,480x944,540x1062,640x1259,720x1416,1080x2124,1169x2299&from=bu&u=dEec5C17Mp28HVRwL8yvv5bdlXBquUhsz2BT10Bk-8c&cs=510x900"
        ]
    },
    {
        name: "Лонгслив",
        price: "990 ₽",
        images: [
            "https://sun9-6.userapi.com/s/v1/ig2/9oxZydvIza_U03IaiGCkk9MCSdWm2PqqFB7Y7fAjDrzDhN6-tA4Dcsq6jmvfL4RIAZlGGoatvpv19IQww642q9Ss.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=xjsfbNLe9-4gxp5ryc6rzq4s2vw1mjPY_l5y3uY7oDk&cs=510x680",
            "https://sun9-21.userapi.com/s/v1/ig2/4oF2hGF_xgC45yF05BOBrX_5hwEURlx56b0hg627AtbqBl5K72Q-UfDsNSBAMtC0VuKL8d5mKkfRqQyQXC5uPqSv.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=a6e-0B_K4bf3iPmXcQ0qWUam9ZZIYat2XMieVIKwtXc&cs=510x680"
        ]
    },
    {
        name: "Рубашка",
        price: "1 590 ₽",
        images: [
            "https://sun9-61.userapi.com/s/v1/ig2/yKSLDM70keK7tYhSDwNWy6R0a-GNbprQtQCsYDLJ7U9z-2GhF9BzZW2zru9BDLo7ZqQiokkPjKf5y43iesqRjZ1j.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=-on3saVWZftRToz1wPvUtNG7AvGTFPnnxQNSWdm-e6o&cs=510x680",
            "https://sun9-56.userapi.com/s/v1/ig2/vryWswPzYIE61Gb1FA_B6lXrL-bhgbvJZk55pShrFjvJW0ymMFNkxjY501Q2XcV6uCd1R5W8YWxfZv63JGb7WQqw.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=oT3x4L57uhOWzoipv7m2rmzx_zturAsfh3CSnJfJaIo&cs=510x680"
        ]
    },
    {
        name: "Сумка",
        price: "1 690 ₽",
        images: [
            "https://sun9-64.userapi.com/s/v1/ig2/03hRnTLZo3pcXKof9FXSHYsnVuspWoujBrA_Dff1UncPlDRF6qecFUPEkr1iZg44jNN3SCuw8G6jwS-glQ432VZT.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=4sdpvWX89kj0NqNIucxv-rluSvq8SCrkJUmR-Vi5xgM&cs=510x680",
            "https://sun9-24.userapi.com/s/v1/ig2/pwTGWSrGrP1ji1mMvojp1lpPGif7J94p1ljOPbJghgikzal3d7SpZVFNaLC6EngZxfVyYxwbyWznEggFHRSE-Nc7.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=1JdMcguwFXUdGg3ODbdFByySDfF-eqNS1fwEQRm5VQo&cs=510x680",
            "https://sun9-27.userapi.com/s/v1/ig2/UMSYpj29DOWhW4_CZmGtLFSgsgo-8WE6KDLQBPm3Fe5bwBUmh02Wiq4kkfN5xtXAcH6W6_49gXCElVJ6uRwI61LQ.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=-pCV-5sevhgSOxxG75SEVCfb3tvAjHvKmDTZ2jXQS1o&cs=510x680"
        ]
    }
];
