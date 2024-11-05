

function changeLanguage(lang) {
    location.hash = lang;
    location.reload();
}

let language = {
    uz: [{
            weather: "OB-HAVO"
        },
        {
            header: "NAMOZ VAQTLARI"
        },
        {
            bomdod: "BOMDOD"
        },
        {
            peshin: "PESHIN"
        },
        {
            asr: "ASR"
        },
        {
            shom: "SHOM"
        },
        {
            xufton: "XUFTON"
        },
        {
            label: "Shaharni kiriting"
        }
    ],

    ru: [{
            weather: "погода"
        },
        {
            header: "Bремя молитвы"
        },
        {
            bomdod: "Yтро"
        },
        {
            peshin: "ПОЛДЕНЬ"
        },
        {
            asr: "ВЕК"
        },
        {
            shom: "ВЕЧЕР"
        },
        {
            xufton: "ХУФТОН"
        },
        {
            label: "войти в город"
        }
    ],

    en: [{
            weather: "weather"
        },
        {
            header: "Prayer times"
        },
        {
            bomdod: "Morning"
        },
        {
            peshin: "NOON"
        },
        {
            asr: "CENTURY"
        },
        {
            shom: "EVENING"
        },
        {
            xufton: "HUFTON"
        },
        {
            label: "enter the city"
        },
        
    ]
};

if (window.location.hash) {
    if (window.location.hash == "#ru") {
        weather__tittle.textContent = language.ru[0].weather;
        header__tittle.textContent = language.ru[1].header;
        bomdod.textContent = language.ru[2].bomdod;
        peshin.textContent  = language.ru[3].peshin;
        asr.textContent  = language.ru[4].asr;
        shom.textContent  = language.ru[5].shom;
        xufton.textContent  = language.ru[6].xufton;
        label.textContent = language.ru[7].label;
    } else if (window.location.hash == "#en") {
        weather__tittle.textContent = language.en[0].weather;
        header__tittle.textContent = language.en[1].header;
        bomdod.textContent = language.en[2].bomdod;
        peshin.textContent = language.en[3].peshin;
        asr.textContent = language.en[4].asr;
        shom.textContent = language.en[5].shom;
        xufton.textContent = language.en[6].xufton;
        label.textContent = language.en[7].label;
    }
}
