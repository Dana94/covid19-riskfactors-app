const mortality = [
    [
        "basic", [
            { "stateName": "age", "title": "Age", "ratio": "OR 1.10", "ratioTitle": "ℹ 1.10x per unit↑", "points": 1 },
            { "stateName": "covidExposure", "title": "COVID-19 Exposure", "ratio": "p <0.05", "ratioTitle": "p <0.05", "points": 1 },
            {
                "stateName": "dyspnea", "title": "Dyspnea", "ratio": "?", "ratioTitle": "", "points": 0, "pointsYes": 1, "pointsNo": 0,
                "secondaryQuestion": {
                    "title": "> 24?",
                    "yes": { "stateName": "dyspneaYes", "title": "RR >24", "ratio": "OR 8.89*", "ratioTitle": "ℹ *8.89x per unit↑" },
                    "no": { "stateName": "dyspneaNo", "title": "RR <24", "ratio": "Insignificant", "ratioTitle": "Insignificant" }
                }

            }, //special case
            { "stateName": "temp", "title": "Fever", "ratio": "Excluded", "ratioTitle": "Excluded", "points": 0 },
            { "stateName": "hypertension", "title": "Hypertension", "ratio": "OR 3.05*", "ratioTitle": "ℹ *3.05x", "points": 1 },
            { "stateName": "diabetes", "title": "Diabetes", "ratio": "OR 2.85*", "ratioTitle": "ℹ *2.85x", "points": 1 },
            { "stateName": "cad", "title": "CAD", "ratio": "OR 21.40*", "ratioTitle": "ℹ *21.40x", "points": 1 },
        ]
    ],
    [
        "advanced", [
            { "stateName": "sofa", "title": "↑ SOFA", "ratio": "OR 5.65", "ratioTitle": "ℹ 5.56x per unit↑", "points": 1 },
            { "stateName": "lympho", "title": "Lymphopenia", "ratio": "p <0.05", "ratioTitle": "p <0.05", "points": 1 },
            {
                "stateName": "leuko", "title": "Leukocytosis", "ratio": "?", "ratioTitle": "", "points": 0, "pointsYes": 1, "pointsNo": 0,
                "secondaryQuestion": {
                    "title": "> 10?",
                    "yes": { "stateName": "leukoYes", "title": "Leukocytosis", "ratio": "OR 6.60*", "ratioTitle": "ℹ *6.60x per unit↑" },
                    "no": { "stateName": "leukoNo", "title": "Leukocytosis", "ratio": "Insignificant", "ratioTitle": "Insignificant" },
                }
            },
            {
                "stateName": "ddimer", "title": "↑ D-Dimer", "ratio": "?", "ratioTitle": "", "points": 0, "pointsYes": 1, "pointsNo": 0,
                "secondaryQuestion": {
                    "title": "> 1 ug/ml?",
                    "yes": { "stateName": "ddimerYes", "ratio": "OR 18.42", "ratioTitle": "ℹ 18.42x per unit↑" },
                    "no": { "stateName": "ddimerNo", "ratio": "Insignificant", "ratioTitle": "Insignificant" }
                }
            },
            {
                "stateName": "ferritin", "title": "↑ Ferritin", "ratio": "?", "ratioTitle": "", "points": 0, "pointsYes": 1, "pointsNo": 0,
                "secondaryQuestion": {
                    "title": "> 300 ug/L?",
                    "yes": { "stateName": "ferritinYes", "ratio": "OR 4.62*", "ratioTitle": "ℹ *4.62x per unit↑" },
                    "no": { "stateName": "ferritinNo", "ratio": "Insignificant", "ratioTitle": "Insignificant" }
                }
            },
            {
                "stateName": "ldh", "title": "↑ LDH", "ratio": "?", "ratioTitle": "", "points": 0, "pointsYes": 1, "pointsNo": 0,
                "secondaryQuestion": {
                    "title": "> 245 U/L?",
                    "yes": { "stateName": "ldhYes", "ratio": "OR 45.43*", "ratioTitle": "ℹ *45.43x per unit↑" },
                    "no": { "stateName": "ldhNo", "ratio": "Insignificant", "ratioTitle": "Insignificant" }
                }
            },
            { "stateName": "plateles", "title": "Low Platelets", "ratio": "p <0.05", "ratioTitle": "p <0.05", "points": 1 },
            {
                "stateName": "pt", "title": "↑ PT", "ratio": "?", "ratioTitle": "", "points": 0, "pointsYes": 1, "pointsNo": 0,
                "secondaryQuestion": {
                    "title": "≥ 16s?",
                    "yes": { "stateName": "ptYes", "ratio": "OR 4.62*", "ratioTitle": "ℹ *4.62x per unit↑" },
                    "no": { "stateName": "ptNo", "ratio": "Insignificant", "ratioTitle": "Insignificant" }
                }
            },
            { "stateName": "procal", "title": "↑ Procalcitonin", "ratio": "OR 13.75*", "ratioTitle": "ℹ *13.75x per unit↑", "points": 1 },
            {
                "stateName": "cr", "title": "↑ Creatinine", "ratio": "?", "ratioTitle": "ℹ *4.39x per unit↑", "points": 0, "pointsYes": 1, "pointsNo": 0,
                "secondaryQuestion": {
                    "title": "> 133 umol/L?",
                    "yes": { "stateName": "crYes", "ratio": "OR 4.39*", "ratioTitle": "ℹ *4.39x per unit↑" },
                    "no": { "stateName": "crNo", "ratio": "Insignificant", "ratioTitle": "Insignificant" }
                }
            },
            {
                "stateName": "hstrop", "title": "↑ hs-Trop", "ratio": "?", "ratioTitle": "", "points": 0, "pointsYes": 1, "pointsNo": 0,
                "secondaryQuestion": {
                    "title": "> 28 pg/ml?",
                    "yes": { "stateName": "hstropYes", "ratio": "OR 80.07*", "ratioTitle": "ℹ *80.07x per unit↑" },
                    "no": { "stateName": "hstropNo", "ratio": "Insignificant", "ratioTitle": "Insignificant" }
                }
            },
            { "stateName": "albumin", "title": "↑ Albumin", "ratio": "p <0.05", "ratioTitle": "p <0.05 (protective)", "points": -1, "protective": true },
            { "stateName": "bilirubin", "title": "↑ Bilirubin", "ratio": "Excluded", "ratioTitle": "Excluded", "points": 0 },
            {
                "stateName": "alt40", "title": "↑ AST/ALT (U/L)", "ratio": "?", "ratioTitle": "", "points": 0, "pointsYes": 1, "pointsNo": 0,
                "secondaryQuestion": {
                    "title": "ALT > 40?",
                    "yes": { "stateName": "alt40Yes", "ratio": "OR 2.87*", "ratioTitle": "ℹ *2.87x per unit↑" },
                    "no": { "stateName": "alt40No", "ratio": "Insignificant", "ratioTitle": "Insignificant" }
                }
            },
            { "stateName": "urea", "title": "↑ Urea", "ratio": "Excluded", "ratioTitle": "Excluded", "points": 0 },
            { "stateName": "il6", "title": "↑ IL-6", "ratio": "OR 1.12", "ratioTitle": "ℹ 1.12x per unit↑", "points": 1 }
        ]
    ]
]

const ards = [
    [
        "basic", [
            {
                "stateName": "age", "title": "Age", "ratio": "?", "ratioTitle": "ℹ 3.26x chance", "points": 0, "pointsYes": 1, "pointsNo": 0,
                "secondaryQuestion": {
                    "title": "≥ 65?",
                    "yes": { "stateName": "ageYes", "ratio": "HR 3.26", "ratioTitle": "ℹ 3.26x chance" },
                    "no": { "stateName": "ageNo", "ratio": "Insignificant", "ratioTitle": "Insignificant" }
                }
            },
            { "stateName": "covidExposure", "title": "COVID-19 Exposure", "ratio": "Excluded", "ratioTitle": "Excluded", "points": 0 },
            { "stateName": "dyspnea", "title": "Dyspnea", "ratio": "P <0.05", "ratioTitle": "p <0.05", "points": 1 },
            {
                "stateName": "temp", "title": "Fever", "ratio": "?", "ratioTitle": "ℹ 77% ↑", "points": 0, "pointsYes": 1, "pointsNo": 0,
                "secondaryQuestion": {
                    "title": "≥ 39℃ (102.2℉)?",
                    "yes": { "stateName": "tempYes", "ratio": "HR 1.77", "ratioTitle": "ℹ 77% ↑" },
                    "no": { "stateName": "tempNo", "ratio": "Insignificant", "ratioTitle": "Insignificant" }
                }
            },
            { "stateName": "hypertension", "title": "Hypertension", "ratio": "HR 1.82", "ratioTitle": "ℹ 82% ↑", "points": 1 },
            { "stateName": "diabetes", "title": "Diabetes", "ratio": "HR 2.34", "ratioTitle": "ℹ 2.34x chance", "points": 1 },
            { "stateName": "cad", "title": "CAD", "ratio": "Insignificant", "ratioTitle": "Insignificant", "points": 0 },
        ]
    ],
    [
        "advanced", [
            { "stateName": "sofa", "title": "↑ SOFA", "ratio": "Excluded", "ratioTitle": "Excluded", "points": 0 },
            { "stateName": "lympho", "title": "Lymphopenia", "ratio": "HR 0.37", "ratioTitle": "ℹ 37% ↑", "points": 1 },
            { "stateName": "leuko", "title": "Leukocytosis", "ratio": "Excluded", "ratioTitle": "Excluded", "points": 0 },
            { "stateName": "ddimer", "title": "↑ D-Dimer", "ratio": "HR 1.03", "ratioTitle": "ℹ 3% ↑", "points": 1 },
            { "stateName": "ferritin", "title": "↑ Ferritin", "ratio": "HR 3.53", "ratioTitle": "ℹ 3.53x chance", "points": 1 },
            { "stateName": "ldh", "title": "↑ LDH", "ratio": "HR 1.61", "ratioTitle": "ℹ 61% ↑", "points": 1 },
            { "stateName": "plateles", "title": "Low Platelets", "ratio": "Insignificant", "ratioTitle": "Insignificant", "points": 0 },
            { "stateName": "pt", "title": "↑ PT", "ratio": "HR 1.56", "ratioTitle": "ℹ 56% ↑", "points": 1 },
            { "stateName": "procal", "title": "↑ Procalcitonin", "ratio": "Excluded", "ratioTitle": "Excluded", "points": 0 },
            { "stateName": "cr", "title": "Creatinine", "ratio": "Insignificant", "ratioTitle": "Insignificant", "points": 0 },
            { "stateName": "hstrop", "title": "↑ hs-Trop", "ratio": "Excluded", "ratioTitle": "Excluded", "points": 0 },
            { "stateName": "albumin", "title": "↑ Albumin", "ratio": "HR 0.49", "ratioTitle": "ℹ 51% ↓ (protective)", "points": -1, "protective": true },
            { "stateName": "bilirubin", "title": "↑ Bilirubin", "ratio": "HR 1.05", "ratioTitle": "ℹ 5% ↑", "points": 1 },
            {
                "stateName": "ast", "title": "↑ AST/ALT (U/L)", "ratio": "?", "ratioTitle": "", "points": 0, "pointsYes": 1, "pointsNo": 0,
                "secondaryQuestion": {
                    "title": "↑ AST",
                    "yes": { "stateName": "astYes", "ratio": "HR 1.02", "ratioTitle": "ℹ 2% ↑" },
                    "no": { "stateName": "astNo", "ratio": "Insignificant", "ratioTitle": "Insignificant" }
                }
            },
            { "stateName": "urea", "title": "↑ Urea", "ratio": "HR 1.13", "ratioTitle": "ℹ 13% ↑", "points": 1 },
            { "stateName": "il6", "title": "↑ IL-6", "ratio": "Insignificant", "ratioTitle": "Insignificant", "points": 1 }
        ]
    ]
]

const ardsDeath = [
    [
        "basic", [
            {
                "stateName": "age", "title": "Age", "ratio": "?", "ratioTitle": "ℹ 6.17x chance", "points": 0, "pointsYes": 1, "pointsNo": 0,
                "secondaryQuestion": {
                    "title": "≥ 65?",
                    "yes": { "stateName": "ageYes", "ratio": "HR 6.17", "ratioTitle": "ℹ 6.17x chance" },
                    "no": { "stateName": "ageNo", "ratio": "Insignificant", "ratioTitle": "Insignificant" }
                }
            },
            { "stateName": "covidExposure", "title": "COVID-19 Exposure", "ratio": "Excluded", "ratioTitle": "Excluded", "points": 0 },
            { "stateName": "dyspnea", "title": "Dyspnea", "ratio": "Insignificant", "ratioTitle": "Insignificant", "points": 0 },
            {
                "stateName": "temp", "title": "Fever", "ratio": "HR 0.41", "ratioTitle": "ℹ 59% ↓ (protective)", "points": 0, "protective": true, "pointsYes": -1, "pointsNo": 0,
                "secondaryQuestion": {
                    "title": "≥ 39℃ (102.2℉)?",
                    "yes": { "stateName": "tempYes", "ratio": "HR 0.41", "ratioTitle": "ℹ 59% ↓ (protective)", "protective": true },
                    "no": { "stateName": "tempNo", "ratio": "Insignificant", "ratioTitle": "Insignificant" }
                }
            },
            { "stateName": "hypertension", "title": "Hypertension", "ratio": "Insignificant", "ratioTitle": "Insignificant", "points": 0 },
            { "stateName": "diabetes", "title": "Diabetes", "ratio": "Insignificant", "ratioTitle": "Insignificant", "points": 0 },
            { "stateName": "cad", "title": "CAD", "ratio": "Insignificant", "ratioTitle": "Insignificant", "points": 0 },
        ]
    ],
    [
        "advanced", [
            { "stateName": "sofa", "title": "↑ SOFA", "ratio": "Excluded", "ratioTitle": "Excluded", "points": 0 },
            { "stateName": "lympho", "title": "Lymphopenia", "ratio": "Insignificant", "ratioTitle": "Insignificant", "points": 0 },
            { "stateName": "leuko", "title": "Leukocytosis", "ratio": "Excluded", "ratioTitle": "Excluded", "points": 0 },
            { "stateName": "ddimer", "title": "↑ D-Dimer", "ratio": "HR 1.02", "ratioTitle": "ℹ 2% ↑", "points": 1 },
            { "stateName": "ferritin", "title": "↑ Ferritin", "ratio": "HR 3.53", "ratioTitle": "ℹ 6.17x chance", "points": 1 },
            { "stateName": "ldh", "title": "↑ LDH", "ratio": "HR 1.30", "ratioTitle": "ℹ 30% ↑", "points": 1 },
            { "stateName": "plateles", "title": "Low Platelets", "ratio": "Insignificant", "ratioTitle": "Insignificant", "points": 0 },
            { "stateName": "pt", "title": "↑ PT", "ratio": "HR 1.08", "ratioTitle": "ℹ 8% ↑", "points": 1 },
            { "stateName": "procal", "title": "↑ Procalcitonin", "ratio": "Excluded", "ratioTitle": "Excluded", "points": 0 },
            { "stateName": "cr", "title": "Creatinine", "ratio": "Insignificant", "ratioTitle": "Insignificant", "points": 0 },
            { "stateName": "hstrop", "title": "↑ hs-Trop", "ratio": "Excluded", "ratioTitle": "Excluded", "points": 0 },
            { "stateName": "albumin", "title": "↑ Albumin", "ratio": "HR 0.19", "ratioTitle": "ℹ 81% ↓ (protective)", "points": -1, "protective": true },
            { "stateName": "bilirubin", "title": "↑ Bilirubin", "ratio": "HR 1.07", "ratioTitle": "ℹ 7% ↑", "points": 1 },
            {
                "stateName": "ast", "title": "↑ AST/ALT (U/L)", "ratio": "?", "ratioTitle": "p <0.05", "points": 0, "pointsYes": 1, "pointsNo": 0,
                "secondaryQuestion": {
                    "title": "↑ AST",
                    "yes": { "stateName": "astYes", "ratio": "p <0.05", "ratioTitle": "p <0.05" },
                    "no": { "stateName": "astNo", "ratio": "Insignificant", "ratioTitle": "Insignificant" }
                }
            }, //this one is white
            { "stateName": "urea", "title": "↑ Urea", "ratio": "HR 1.13", "ratioTitle": "ℹ 13% ↑", "points": 1 },
            { "stateName": "il6", "title": "↑ IL-6", "ratio": "HR 1.03", "ratioTitle": "ℹ 3% ↑", "points": 1 }
        ]
    ]]

const icu = [
    ["basic", [
        { "stateName": "age", "title": "Age", "ratio": "p <0.001", "ratioTitle": "p <0.001", "points": 1 },
        { "stateName": "covidExposure", "title": "COVID-19 Exposure", "ratio": "Insignificant", "ratioTitle": "Insignificant", "points": 0 },
        { "stateName": "dyspnea", "title": "Dyspnea", "ratio": "p <0.001", "ratioTitle": "p <0.001", "pointsYes": 1, "pointsNo": 0 }, //special case
        { "stateName": "temp", "title": "Fever", "ratio": "Excluded", "ratioTitle": "Excluded", "points": 0 },
        { "stateName": "hypertension", "title": "Hypertension", "ratio": "p <0.001", "ratioTitle": "p <0.001", "points": 1 },
        { "stateName": "diabetes", "title": "Diabetes", "ratio": "p=0.009", "ratioTitle": "p=0.009", "points": 1 },
        { "stateName": "cad", "title": "CAD", "ratio": "p=0.04", "ratioTitle": "p=0.04", "points": 1 },
    ]],
    ["advanced", [
        { "stateName": "sofa", "title": "↑ SOFA", "ratio": "Excluded", "ratioTitle": "Excluded", "points": 0 },
        { "stateName": "lympho", "title": "Lymphopenia", "ratio": "p=0.03", "ratioTitle": "p=0.03", "points": 1 },
        { "stateName": "leuko", "title": "Leukocytosis", "ratio": "p=0.003", "ratioTitle": "p=0.003", "points": 1 },
        { "stateName": "ddimer", "title": "↑ D-Dimer", "ratio": "p <0.001", "ratioTitle": "p <0.001", "points": 1 },
        { "stateName": "ferritin", "title": "↑ Ferritin", "ratio": "Excluded", "ratioTitle": "Excluded", "points": 0 },
        { "stateName": "ldh", "title": "↑ LDH", "ratio": "p <0.001", "ratioTitle": "p <0.001", "points": 1 },
        { "stateName": "plateles", "title": "Low Platelets", "ratio": "Insignificant", "ratioTitle": "Insignificant", "points": 0 },
        { "stateName": "pt", "title": "↑ PT", "ratio": "Insignificant", "ratioTitle": "Insignificant", "points": 0 },
        {
            "stateName": "procal", "title": "↑ Procalcitonin", "ratio": "?", "ratioTitle": "", "points": 0, "pointsYes": 1, "pointsNo": 0,
            "secondaryQuestion": {
                "title": "> 0.05 ng/ml?",
                "yes": { "stateName": "procalYes", "ratio": "p <0.001", "ratioTitle": "p <0.001" },
                "no": { "stateName": "procalNo", "ratio": "Insignificant", "ratioTitle": "Insignificant" }
            }
        },
        { "stateName": "cr", "title": "↑ Creatinine", "ratio": "p=0.04", "ratioTitle": "p=0.04", "points": 1 },
        { "stateName": "hstrop", "title": "↑ hs-Trop", "ratio": "p=0.004", "ratioTitle": "p=0.004", "points": 1 },
        { "stateName": "albumin", "title": "↑ Albumin", "ratio": "Excluded", "ratioTitle": "Excluded", "points": 0, "protective": true },
        { "stateName": "bilirubin", "title": "↑ Bilirubin", "ratio": "p=0.02", "ratioTitle": "p=0.02", "points": 1 },
        { "stateName": "ast", "title": "↑ AST/ALT (U/L)", "ratio": "p<0.05", "ratioTitle": "p<0.05", "points": 1 },
        { "stateName": "urea", "title": "↑ Urea", "ratio": "Excluded", "ratioTitle": "Excluded", "points": 0 },
        { "stateName": "il6", "title": "↑ IL-6", "ratio": "Excluded", "ratioTitle": "Excluded", "points": 0 }
    ]]
]

// const exceptionObjects = [
//     { "stateName": "rr24YesState", "title": "RR >24", "ratio": "OR 8.89*", "ratioTitle": "ℹ *8.89x per unit↑", "points": 1 },
//     { "stateName": "rr24NoState", "title": "RR <24", "ratio": "Insignificant", "ratioTitle": "Insignificant", "points": 0 },
//     { "stateName": "alt40YesState", "title": "ALT >40", "ratio": "OR 2.87*", "ratioTitle": "ℹ *2.87x per unit↑", "points": 1 },
//     { "stateName": "alt40NoState", "title": "ALT <40", "ratio": "Insignificant", "ratioTitle": "Insignificant", "points": 0 },
//     { "stateName": "astYesState", "title": "↑ AST", "ratio": "HR 1.02", "ratioTitle": "ℹ 2% ↑", "points": 1 },
//     { "stateName": "astNoState", "title": "Not ↑ AST", "ratio": "Insignificant", "ratioTitle": "Insignificant", "points": 0 }
// ]

export { ards, ardsDeath, mortality, icu }