exports.getAbout = async (req, res) => {
    res.status(200).json({
        goals: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
        properties: [
            {
                img: "",
                title: "لورم ایپسوم1",
                desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"
            },
            {
                img: "",
                title: "لورم ایپسوم2",
                desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"
            },
            {
                img: "",
                title: "لورم ایپسوم3",
                desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"
            },
        ],
        team: [
            {
                img: "/assets/images/team-1.png",
                name: "عارف حسین پور",
                desc: "بنیانگذار و سئو کار هفده",
                social: [
                    { name: "twitter", url: "https://twitter.com/ArefHosseinPour" },
                    { name: "linkedin", url: "https://linkedin.com/in/aref-hosseinpour-123456" }
                ]
            },
            {
                img: "/assets/images/team-2.png",
                name: "فرشید وثوق",
                desc: "توسعه دهنده فرانت-اند، هم بنیان گذار هفده و آچار فرانسه تیم",
                social: [
                    { name: "twitter", url: "https://twitter.com/FarshidVosough" },
                    { name: "linkedin", url: "https://linkedin.com/in/farshid-vosough-123456" }
                ]
            },
            {
                img: "/assets/images/team-3.png",
                name: "محمد زاهدی",
                desc: "توسعه دهنده بک-اند و اسکرام مستر بی اعصاب و خسته تیم",
                social: [
                    { name: "twitter", url: "https://twitter.com/mamad.za" },
                    { name: "linkedin", url: "https://linkedin.com/in/mamad-za-123456" }
                ]
            },
            {
                img: "/assets/images/team-4.png",
                name: "رکسانا احمدی",
                desc: "طراح حرفه ای رابط کاربری، گرافیست خوش ذوق و نویسنده خلاق",
                social: [
                    { name: "twitter", url: "https://twitter.com/Roksana.a" },
                    { name: "linkedin", url: "https://linkedin.com/in/Roksana-a-123456" }
                ]
            }
        ]
    });
}