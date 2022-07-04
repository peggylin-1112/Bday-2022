
function showLogo() {
    $(".main-logo").show();
}
$(function() {
    var staffs = [
        {
            name : "Ali",
            img : "./img/staff/ali.png",
            accountDisplay: "",
            link : ""
        },
        {
            name : "CkCk",
            img : "./img/staff/呵呵.png",
            accountDisplay: "@g35301",
            link : "https://twitter.com/g35301"
        },
        {
            name : "Jessie Chen",
            img : "./img/staff/JessieChen.png",
            accountDisplay: "@jesssssiechennnnn",
            link : "https://www.instagram.com/jesssssiechennnnn/"
        },
        {
            name : "Kaoru",
            img : "./img/staff/kaoru.png",
            accountDisplay: "@star07160721",
            link : "https://twitter.com/star07160721"
        },
        {
            name : "Kiwi",
            img : "./img/staff/KIWI.png",
            accountDisplay: "@jellyfishsUki",
            link : "https://twitter.com/jellyfishsUki"
        },
        {
            name : "Mirum",
            img : "./img/staff/Mirum.png",
            accountDisplay: "@2mirum2",
            link : "https://twitter.com/2mirum2"
        },
        {
            name : "Misty",
            img : "./img/staff/Misty.png",
            accountDisplay: "@qwqouo",
            link : "https://twitter.com/qwqouo"
        },
        {
            name : "とま偷馬",
            img : "./img/staff/uktoma.png",
            accountDisplay: "@sandstofu1",
            link : "https://twitter.com/sandstofu1"
        },
        {
            name : "叭啦 bala",
            img : "./img/staff/BALA.png",
            accountDisplay: "@a9630112",
            link : "https://twitter.com/a9630112"
        },
        {
            name : "碳Tan✧Rin鱗",
            img : "./img/staff/tanlin.png",
            accountDisplay: "@tanlinGM",
            link : "https://twitter.com/tanlinGM"
        },
        {
            name : "村崎海月",
            img : "./img/staff/村崎海月.png",
            accountDisplay: "@kaigetsu2434",
            link : "https://twitter.com/kaigetsu2434"
        },
        {
            name : "歐姆蛋",
            img : "./img/staff/omelet.png",
            accountDisplay: "",
            link : ""
        }
    ];

    for (let index = 0; index < staffs.length; index++) {
        var imgLink = '<a href="' + staffs[index].link + '" target="_blank"><img src="' + staffs[index].img + '" class="img-fluid rounded-start" alt=""></a>';
        if (staffs[index].link === "") {
            imgLink = '<img src="' + staffs[index].img + '" class="img-fluid rounded-start" alt="">';
        }

        $("#section-staff").append(
        '<div class="card mb-3 staff-card">' +
        '    <div class="row g-0">' +
        '      <div class="col-md-4 d-flex align-items-center">' + imgLink +
        '      </div>' +
        '      <div class="col-md-8">' +
        '       <div class="card-body">' +
        '          <h5 class="card-title">' + staffs[index].name + '</h5>' +
        '          <p class="card-text"><a href="' + staffs[index].link + '" target="_blank">' + staffs[index].accountDisplay + '</a></p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '</div>'
        );
    }

    const myModalEl = document.getElementById('easter-egg-story')
    myModalEl.addEventListener('show.bs.modal', event => {
        $(".story-button-left").hide();
        $(".story-button-right").hide();
    });
    myModalEl.addEventListener('shown.bs.modal', event => {
        storyIndex = 0;
        if (storyIndex === 0) {
            changeStory(storyIndex);
        }
    });
    $(".story-speaker").hide();
    starBg();
});
function character(index){
    var characters = [
        {
            img: './img/uki.png',
            imgMobile: './img/uki-mobile.png',
            intro: 'Our birthday boy!! Psychic from Nijien 5th wave Noctyx.<br/>Uki has a soft, gentle and sexy voice.<br/>He is calm and soft but also has a very different personality.<br/>A star fell in his eye which made him become heterochromia.<br/>He has a good relationship with everyone in Noctyx. They always support each other.<br/>As an \"eggholic\", he likes eggs so much even thought about having an egg farm so that he can track the source of eggs.<br/>'
        },
        {
            img:'./img/alban.png',
            imgMobile: './img/alban-mobile.png',
            intro: 'Disguising as a staff in the convenience store but actually is a phantom thief.<br/>He loves all shiny and valuable stuff and can\'t help stealing it once he saw it.<br/>He is a heterochromia cat boy, usually a kawaii boy but sometimes shows his paws to you.<br/>He is a potential tea kettle just like Fu chan.<br/>The most loved person in the world is Sonny Oni.<br/>He prepared an scotch egg for Uki.<br/>'
        },
        {
            img:'./img/fulgur.png',
            imgMobile: './img/fulgur-mobile.png',
            intro: 'As known as Fuchan, he is a kind, friendly and talkative person.<br/>His tea kettle laugh is a very iconic part of him.<br/>As a person who is not good at cooking but a good bartender, Fu chan made a cup of Eggnog for Uki.<br/>'
        },
        {
            img:'./img/sonny.png',
            imgMobile: './img/sonny-mobile.png',
            intro: 'Taichou of VSF, loves negi and sushi so much. He looks like a thoughtful person but actually just a big dog boy.<br/>He is very straightforward, sometimes adorable.<br/>The most loved person in the world is Alban. He is the only one who can tease Alban. If someone does so, he will take revenge on him/her.<br/>He prepared an egg benedict for Uki.<br/>'
        },
        {
            img:'./img/yugo.png',
            imgMobile: './img/yugo-mobile.png',
            intro: 'Having a passion for music, Yugo is a very energetic and enthusiastic person who always makes people ecstatic.<br/>Yugo loves Milkshake so much that they are meant for each other.<br/>As a Japanese, Yugo prepared Omurice for Uki.'
        }
    ];
    $("#character-img").attr("src", characters[index].img);
    $("#character-mobile").attr("src", characters[index].imgMobile);
    $("#character-intro").html(characters[index].intro);
    scrollToElement('character-box');
}
function goTop(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function scrollToElement(elementId) {
    var position = $("#"+elementId).offset().top;
    $(window).scrollTop(position-120);
}

var storyIndex = 0;
var story = [
    {
        img : './img/easter-egg/ukistory01.jpg',
        text: '(At home) Uki, who had just finished a birthday party, noticed that stargazers seemed different from the usual.'
    },
    {
        img : './img/easter-egg/ukistory02.jpg',
        text: 'Their bodies were faintly glowing.'
    },
    {
        img : './img/easter-egg/ukistorylight.jpg',
        text: 'Suddenly, a blinding light flashed in front of Uki.'
    },
    {
        img : './img/easter-egg/ukistory03.jpg',
        text: '\"Mama~mama~\" a gentle and friendly voice came into Uki\'s mind.<br/>Is it from stargazers?'
    },
    {
        img : './img/easter-egg/ukistory04.jpg',
        text: 'Uki found that he could hear stargazers\' talking.'
    },
    {
        img : './img/easter-egg/ukistory05.jpeg',
        text: 'Many voices appeared one after another, it seems that there are many more stargazers who have something to say to uki!'
    },
    {
        name: '村崎海月',
        img : './img/staff/村崎海月.png',
        text: 'Stars are brilliant in the night sky, and you are brilliant in our mind.<br/>Happy birthday to Uki（○人●）♡'
    },
    {
        name: '碳Tan✧Rin鱗',
        img : './img/staff/tanlin.png',
        text: 'Hope you like these cake and cream I drew for you<3 Happy birthday!Uki<br/>your birthday painter puppy stargazer TANRIN Love you'
    },
    {
        name: 'とま偷馬',
        img : './img/staff/uktoma.png',
        text: 'Happy Birthday UKI!💜</br>Which dish would you most like to eat?<br/>Wishing you a wonderful and delicious day. '
    },
    {
        name: '叭啦 bala',
        img : './img/staff/BALA.png',
        text: 'Among the stars, you are the most dazzling one in our eyes.<br/>Happy birthday UKI, we love you.'
    },
    {
        name: 'Kaoru',
        img : './img/staff/kaoru.png',
        text: 'Happy birthday Uki!! Hope you have a wonderful day. <br/>You\'re the star that fell in my life.<br> I\'m always here. Love you 💜'
    },
    {
        name: 'Kiwi',
        img : './img/staff/KIWI.png',
        text: 'Happy birthday Uki!🎉 <br/>Thank you for being here, being the one chosen by the stars, you deserve our love💜 💜 💜'
    },
    {
        name: 'Misty',
        img : './img/staff/Misty.png',
        text: 'Happy Birthday Uki!<br/>You are the star in my life✨<br/>Love you💜💜💜'
    },
    {
        name: 'Mirum',
        img : './img/staff/Mirum.png',
        text: 'Happy birthday Uki, you\'re my Violeta<3<br/>Thank you for making my day all the time!'
    },
    {
        name: 'Jessie Chen',
        img : './img/staff/JessieChen.png',
        text: 'Happy Birthday Uki 🎉🎉🎉 <br>Hope this project makes you happy.<br>You give me more motivation to learn English.<br/>Thanks for your coming!'
    },
    {
        name: 'CkCk',
        img : './img/staff/呵呵.png',
        text: 'Happy Birthday UKI!✨ ✨<br/>Hope you like this project!<br/>Wishing you happiness today, tomorrow, and always!💜'
    },
    {
        name: '歐姆蛋',
        img : './img/staff/omelet.png',
        text: 'Happy Birthday Uki! Hope you like this project.<br/>Thank you for giving us so many precious memories.<br/>Looking forward to spending more time together ❤'
    }
];

function storyNext() {
    if (storyIndex >= 0 && storyIndex+1 < story.length) {
        storyIndex++;
        changeStory(storyIndex);
    }
}
function storyPrev() {
    if (storyIndex < story.length && storyIndex-1 >= 0) {
        storyIndex--;
        changeStory(storyIndex);
    }
}
function changeStory(index) {
    if (storyIndex == (story.length-1)) {

    }
    $("#story-img").attr("src", story[index].img);
    if (story[index].name) {
        $(".story-speaker").show();
        $("#story-speaker").html(story[index].name);
    } else {
        $(".story-speaker").hide();
    }
    $("#story-text").html("");
    $('#story-text').attr('onclick', '');
    var options = {
        strings: [story[index].text],
        typeSpeed: 40,
        showCursor: false,
        onBegin: (self) => {
            $(".story-button-left").hide();
            $(".story-button-right").hide();
        },
        onComplete: (self) => {
            if (storyIndex == 0) {
                $(".story-button-left").hide();
            } else {
                $(".story-button-left").show();
            }

            if (storyIndex == (story.length-1)) {
                $(".story-button-right").hide();
                $('#story-text').attr('onclick', '');
                $('#story-text').attr('data-bs-dismiss', 'modal');
            } else {
                $(".story-button-right").show();
                $('#story-text').attr('onclick', 'storyNext()');
            }
        }
    };

    var typed = new Typed('.story-text', options);
}
function starBg() {
    var tops = [100, 100, 225, 285, 350, 375, 520, 525 ];
    var xPosition = [50, 100, 190, 175, 75, 50, 90, 155 ];
    $(".star-bg img").each(function (index) {
        if (index % 2 == 0) {
            $(this).css(
                {
                    "top" : tops[index],
                    "left" : xPosition[index]
                }
            );
        } else {
            $(this).css(
                {
                    "top" : tops[index],
                    "right" : xPosition[index]
                }
            );
        }
    });
}