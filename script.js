class length {
    convert() {
        const input = document.getElementById("unit1").value;
        const from = document.getElementById("unit11").value;
        const to = document.getElementById("unit12").value;
        let result;
        if (from === "meter" && to === "kilometer") {
            result = input / 1000;
            result = result.toFixed(4);
        } else if (from === "meter" && to === "centimeter") {
            result = input * 100;
            result = result.toFixed(4);
        } else if (from === "meter" && to === "meter") {
            result = input;
        } else if (from === "meter" && to === "millimeter") {
            result = input * 1000;
            result = result.toFixed(4);
        }
        else if (from === "meter" && to === "micrometer") {
            result = input * 10 ** 6;
            result = result.toExponential(2);
        }
        else if (from === "meter" && to === "nanometer") {
            result = input * 10 ** 9;
            result = result.toExponential(2);
        }
        else if (from === "meter" && to === "mile") {
            result = input / 1609;
            result = result.toFixed(4);
        } else if (from === "meter" && to === "yard") {
            result = input * 1.094;
            result = result.toFixed(4);
        } else if (from === "meter" && to === "foot") {
            result = input * 3.281;
            result = result.toFixed(4);
        } else if (from === "meter" && to === "inch") {
            result = input * 39.37;
            result = result.toFixed(4);
        }
        else if (from === "meter" && to === "light year") {
            result = input / (9.461 * 10 ** 15);
            result = result.toExponential(2);
        }
        else if (from === "kilometer" && to === "kilometer") {
            result = input;
        } else if (from === "kilometer" && to === "meter") {
            result = input * 1000;
            result = result.toFixed(4);
        } else if (from === "kilometer" && to === "centimeter") {
            result = input * 100000;
            result = result.toFixed(4);
        }
        else if (from === "kilometer" && to === "millimeter") {
            result = input * 10 ** 6;
            result = result.toExponential(2);
        }
        else if (from === "kilometer" && to === "micrometer") {
            result = input * 10 ** 9;
            result = result.toExponential(2);
        }
        else if (from === "kilometer" && to === "nanometer") {
            result = input * 10 ** 12;
            result = result.toExponential(2);
        }
        else if (from === "kilometer" && to === "mile") {
            result = input / 1.609;
            result = result.toFixed(4);
        } else if (from === "kilometer" && to === "yard") {
            result = input * 1094;
            result = result.toFixed(4);
        } else if (from === "kilometer" && to === "foot") {
            result = input * 3281;
            result = result.toFixed(4);
        } else if (from === "kilometer" && to === "inch") {
            result = input * 39370;
            result = result.toFixed(4);
        }
        else if (from === "kilometer" && to === "light year") {
            result = input / (9.461 * 10 ** 12);
            result = result.toExponential(2);
        }
        else if (from === "centimeter" && to === "meter") {
            result = input / 100;
            result = result.toFixed(4);
        } else if (from === "centimeter" && to === "kilometer") {
            result = input / 100000;
            result = result.toExponential(2);
        } else if (from === "centimeter" && to === "centimeter") {
            result = input;
        }
        else if (from === "centimeter" && to === "millimeter") {
            result = input * 10;
            result = result.toFixed(4);
        }
        else if (from === "centimeter" && to === "micrometer") {
            result = input * 10000;
            result = result.toFixed(4);
        }
        else if (from === "centimeter" && to === "nanometer") {
            result = input * 10 ** 7;
            result = result.toExponential(2);
        }
        else if (from === "centimeter" && to === "mile") {
            result = input / 160900;
            result = result.toExponential(2);
        } else if (from === "centimeter" && to === "yard") {
            result = input / 91.44;
            result = result.toFixed(4);
        } else if (from === "centimeter" && to === "foot") {
            result = input / 30.48;
            result = result.toFixed(4);
        } else if (from === "centimeter" && to === "inch") {
            result = input / 2.54;
            result = result.toFixed(4);
        }
        else if (from === "centimeter" && to === "light year") {
            result = input / (9.461 * 10 ** 17);
            result = result.toExponential(2);
        }

        else if (from === "millimeter" && to === "meter") {
            result = input / 1000;
            result = result.toFixed(4);
        } else if (from === "millimeter" && to === "kilometer") {
            result = input / 10 ** 6;
            result = result.toExponential(2);
        } else if (from === "millimeter" && to === "centimeter") {
            result = input / 10;
            result = result.toFixed(4);
        }
        else if (from === "millimeter" && to === "millimeter") {
            result = input;
        }
        else if (from === "millimeter" && to === "micrometer") {
            result = input * 1000;
            result = result.toFixed(2);
        }
        else if (from === "millimeter" && to === "nanometer") {
            result = input * 10 ** 6;
            result = result.toExponential(2);
        }
        else if (from === "millimeter" && to === "mile") {
            result = input / (1.609 * 10 ** 6);
            result = result.toExponential(4);
        } else if (from === "millimeter" && to === "yard") {
            result = input / 914.4;
            result = result.toFixed(4);
        } else if (from === "millimeter" && to === "foot") {
            result = input / 304.8;
            result = result.toFixed(4);
        } else if (from === "millimeter" && to === "inch") {
            result = input / 25.4;
            result = result.toFixed(4);
        }
        else if (from === "millimeter" && to === "light year") {
            result = input / (9.461 * 10 ** 18);
            result = result.toExponential(2);
        }

        else if (from === "micrometer" && to === "meter") {
            result = input / 10 ** 6;
            result = result.toExponential(4);
        } else if (from === "micrometer" && to === "kilometer") {
            result = input / 10 ** 9;
            result = result.toExponential(2);
        } else if (from === "micrometer" && to === "centimeter") {
            result = input / 10000;
            result = result.toFixed(4);
        }
        else if (from === "micrometer" && to === "millimeter") {
            result = input / 1000;
            result = result.toFixed(4);
        }
        else if (from === "micrometer" && to === "micrometer") {
            result = input;
        }
        else if (from === "micrometer" && to === "nanometer") {
            result = input * 1000;
            result = result.toFixed(4);
        }
        else if (from === "micrometer" && to === "mile") {
            result = input / (1.609 * 10 ** 9);
            result = result.toExponential(2);
        } else if (from === "micrometer" && to === "yard") {
            result = input / 914400;
            result = result.toExponential(2);
        } else if (from === "micrometer" && to === "foot") {
            result = input / 304800;
            result = result.toExponential(2);
        } else if (from === "micrometer" && to === "inch") {
            result = input / 25400;
            result = result.toExponential(2);
        }
        else if (from === "micrometer" && to === "light year") {
            result = input / (9.461 * 10 ** 21);
            result = result.toExponential(2);
        }

        else if (from === "nanometer" && to === "meter") {
            result = input / 10 ** 9;
            result = result.toExponential(2);
        } else if (from === "nanometer" && to === "kilometer") {
            result = input / 10 ** 12;
            result = result.toExponential(2);
        } else if (from === "nanometer" && to === "centimeter") {
            result = input / 10 ** 7;
            result = result.toExponential(2);
        }
        else if (from === "nanometer" && to === "millimeter") {
            result = input / 10 ** 6;
            result = result.toExponential(2)
        }
        else if (from === "nanometer" && to === "micrometer") {
            result = input / 1000;
            result = result.toFixed(4);
        }
        else if (from === "nanometer" && to === "nanometer") {
            result = input;
        }
        else if (from === "nanometer" && to === "mile") {
            result = input / (1.609 * 10 ** 12);
            result = result.toExponential(2);
        } else if (from === "nanometer" && to === "yard") {
            result = input / (9.144 * 10 ** 8);
            result = result.toExponential(2);
        } else if (from === "nanometer" && to === "foot") {
            result = input / (3.048 * 10 ** 8);
            result = result.toExponential(2);
        } else if (from === "nanometer" && to === "inch") {
            result = input / (2.54 * 10 ** 7);
            result = result.toExponential(2);
        }
        else if (from === "nanometer" && to === "light year") {
            result = input / (9.461 * 10 ** 24);
            result = result.toExponential(2);
        }

        else if (from === "mile" && to === "meter") {
            result = input * 1609;
            result = result.toFixed(4);
        } else if (from === "mile" && to === "kilometer") {
            result = input * 1.609;
            result = result.toFixed(4);
        } else if (from === "mile" && to === "centimeter") {
            result = input * 160934;
            result = result.toFixed(4);
        }
        else if (from === "mile" && to === "millimeter") {
            result = input * (1.609 * 10 ** 6);
            result = result.toExponential(2);
        }
        else if (from === "mile" && to === "micrometer") {
            result = input * (1.609 * 10 ** 9);
            result = result.toExponential(2);
        }
        else if (from === "mile" && to === "nanometer") {
            result = input * (1.609 * 10 ** 12);
            result = result.toExponential(2);
        }
        else if (from === "mile" && to === "mile") {
            result = input;
        } else if (from === "mile" && to === "yard") {
            result = input * 1760;
            result = result.toFixed(4);
        } else if (from === "mile" && to === "foot") {
            result = input * 5280;
            result = result.toFixed(4);
        } else if (from === "mile" && to === "inch") {
            result = input * 63360;
            result = result.toFixed(4);
        }
        else if (from === "mile" && to === "light year") {
            result = input / (5.879 * 10 ** 12);
            result = result.toExponential(2);
        }

        else if (from === "yard" && to === "meter") {
            result = input / 1.094;
            result = result.toFixed(4);
        } else if (from === "yard" && to === "kilometer") {
            result = input / 1094;
            result = result.toFixed(4);
        } else if (from === "yard" && to === "centimeter") {
            result = input * 91.44;
            result = result.toFixed(4);
        }
        else if (from === "yard" && to === "millimeter") {
            result = input * 914.4;
            result = result.toFixed(4);
        }
        else if (from === "yard" && to === "micrometer") {
            result = input * 914400;
            result = result.toFixed(2);
        }
        else if (from === "yard" && to === "nanometer") {
            result = input * (9.144 * 10 ** 8);
            result = result.toExponential(2);
        }
        else if (from === "yard" && to === "mile") {
            result = input / 1760;
            result = result.toFixed(4);
        } else if (from === "yard" && to === "yard") {
            result = input;
        } else if (from === "yard" && to === "foot") {
            result = input * 3;
            result = result.toFixed(4);
        } else if (from === "yard" && to === "inch") {
            result = input * 36;
            result = result.toFixed(4);
        }
        else if (from === "yard" && to === "light year") {
            result = input / (1.035 * 10 ** 16);
            result = result.toExponential(2);
        }

        else if (from === "foot" && to === "meter") {
            result = input / 3.281;
            result = result.toFixed(4);
        } else if (from === "foot" && to === "kilometer") {
            result = input / 3281;
            result = result.toFixed(4);
        } else if (from === "foot" && to === "centimeter") {
            result = input * 30.48;
            result = result.toFixed(4);
        }
        else if (from === "foot" && to === "millimeter") {
            result = input * 304.8;
            result = result.toFixed(4);
        }
        else if (from === "foot" && to === "micrometer") {
            result = input * 304800;
            result = result.toExponential(2);
        }
        else if (from === "foot" && to === "nanometer") {
            result = input * (3.048 * 10 ** 8);
            result = result.toExponential(2);
        }
        else if (from === "foot" && to === "mile") {
            result = input / 5280;
            result = result.toFixed(4);
        } else if (from === "foot" && to === "yard") {
            result = input / 3;
            result = result.toFixed(4);
        } else if (from === "foot" && to === "foot") {
            result = input;
        } else if (from === "foot" && to === "inch") {
            result = input * 12;
            result = result.toFixed(4);
        }
        else if (from === "foot" && to === "light year") {
            result = input / (3.104 * 10 ** 16);
            result = result.toExponential(2);
        }

        else if (from === "inch" && to === "meter") {
            result = input / 39.37;
            result = result.toFixed(4);
        } else if (from === "inch" && to === "kilometer") {
            result = input / 39370;
            result = result.toFixed(5);
        } else if (from === "inch" && to === "centimeter") {
            result = input * 2.54;
            result = result.toFixed(2);
        }
        else if (from === "inch" && to === "millimeter") {
            result = input * 25.4;
            result = result.toFixed(2);
        }
        else if (from === "inch" && to === "micrometer") {
            result = input * 25400;
            result = result.toFixed(1);
        }
        else if (from === "inch" && to === "nanometer") {
            result = input * (2.54 * 10 ** 7);
            result = result.toExponential(2);
        }
        else if (from === "inch" && to === "mile") {
            result = input / 63360;
            result = result.toFixed(5);
        } else if (from === "inch" && to === "yard") {
            result = input / 36;
            result = result.toFixed(4);
        } else if (from === "inch" && to === "foot") {
            result = input / 12;
            result = result.toFixed(4);
        } else if (from === "inch" && to === "inch") {
            result = input;
        }
        else if (from === "inch" && to === "light year") {
            result = input / (3.725 * 10 ** 17);
            result = result.toExponential(2);
        }

        else if (from === "light year" && to === "meter") {
            result = input * (9.461 * 10 ** 15);
            result = result.toExponential(2);
        } else if (from === "light year" && to === "kilometer") {
            result = input * (9.461 * 10 ** 12);
            result = result.toExponential(2);
        } else if (from === "light year" && to === "centimeter") {
            result = input * (9.461 * 10 ** 17);
            result = result.toExponential(2);
        }
        else if (from === "light year" && to === "millimeter") {
            result = input * (9.461 * 10 ** 18);
            result = result.toExponential(2);
        }
        else if (from === "light year" && to === "micrometer") {
            result = input * (9.461 * 10 ** 21);
            result = result.toExponential(2);
        }
        else if (from === "light year" && to === "nanometer") {
            result = input * (9.461 * 10 ** 24);
            result = result.toExponential(2);
        }
        else if (from === "light year" && to === "mile") {
            result = input * (5.879 * 10 ** 12);
            result = result.toExponential(2);
        } else if (from === "light year" && to === "yard") {
            result = input * (1.035 * 10 ** 16);
            result = result.toExponential(2);
        } else if (from === "light year" && to === "foot") {
            result = input * (3.104 * 10 ** 16);
            result = result.toExponential(2);
        } else if (from === "light year" && to === "inch") {
            result = input * (3.725 * 10 ** 17);
            result = result.toExponential(2);
        }
        else if (from === "light year" && to === "light year") {
            result = input;
        }
        document.getElementById("unit2").value = result;
    }

}
let l = new length;
class temperature {
    tconvert() {
        const input = document.getElementById("type1").value;
        const from = document.getElementById("type11").value;
        const to = document.getElementById("type12").value;
        let temp;
        if (from === "celcius" && to === "kelvin") {
            temp = input + 273.15;
        }
        else if (from === "celcius" && to === "celcius") {
            temp = input;
        }
        else if (from === "celcius" && to === "fahreinheit") {
            temp = (1.8 * input) + 32;
        }
        else if (from === "kelvin" && to === "celcius") {
            temp = input - 273.15;
        }
        else if (from === "kelvin" && to === "kelvin") {
            temp = input;
        }
        else if (from === "kelvin" && to === "fahreinheit") {
            temp = (input - 273.15) * 1.8 + 32;
        }
        else if (from === "fahreinheit" && to === "kelvin") {
            temp = (input - 32) * 0.55 + 273.15;
        }
        else if (from === "fahreinheit" && to === "celcius") {
            temp = (input - 32) * 0.55;
        }
        else if (from === "fahreinheit" && to === "fahreinheit") {
            temp = input;
        }
        document.getElementById("type2").value = temp;
    }
}
let t = new temperature;
class Area {
    aconvert() {
        const input = document.getElementById("area1").value;
        const from = document.getElementById("area11").value;
        const to = document.getElementById("area12").value;
        let area;
        if (from === "sqkilo" && to === "sqmeter") {
            area = input * (10 ** 6);
            area = to.Exponential(2);
        }
        else if (from === "sqkilo" && to === "sqkilo") {
            area = input;
        }
        else if (from === "sqkilo" && to === "sqcent") {
            area = input * 10 ** 10;
            area = area.toExponential(2);
        }
        else if (from === "sqkilo" && to === "sqmilli") {
            area = input * 10 ** 12;
            area = area.toExponential(2);
        }
        else if (from === "sqkilo" && to === "sqdeci") {
            area = input * 100000000;
            area = area.toFixed(2);
        }
        else if (from === "sqkilo" && to === "sqmile") {
            area = input / 2.58998811;
            area = area.toFixed(4);
        }
        else if (from === "sqkilo" && to === "sqyard") {
            area = input * (1.1960 * 10 ** 6);
            area = area.toExponential(4);
        }
        else if (from === "sqkilo" && to === "sqfoot") {
            area = input * (1.076 * 10 ** 7);
            area = area.toExponential(4);
        }
        else if (from === "sqkilo" && to === "sqinch") {
            area = input * (1.55 * 10 ** 9);
            area = area.toExponential(2);
        }
        else if (from === "sqkilo" && to === "hect") {
            area = input * 100;
            area = area.toFixed(1);
        }
        else if (from === "sqkilo" && to === "acre") {
            area = input * 247.105;
            area = area.toFixed(2);
        }
        else if (from === "sqmeter" && to === "sqmeter") {
            area = input;
        }
        else if (from === "sqmeter" && to === "sqkilo") {
            area = input / 1000000;
            area = area.toFixed(7);
        }
        else if (from === "sqmeter" && to === "sqcent") {
            area = input * 10000;
            area = area.toFixed(2);
        }
        else if (from === "sqmeter" && to === "sqmilli") {
            area = input * 1000000;
            area = area.toFixed(2);
        }
        else if (from === "sqmeter" && to === "sqdeci") {
            area = input * 100;
            area = area.toFixed(2);
        }
        else if (from === "sqmeter" && to === "sqmile") {
            area = input / (2.59 * 10 ** 6);
            area = area.toExponential(4);
        }
        else if (from === "sqmeter" && to === "sqyard") {
            area = input * 1.19599005;
            area = area.toFixed(6);
        }
        else if (from === "sqmeter" && to === "sqfoot") {
            area = input * 10.7638104;
            area = area.toFixed(4);
        }
        else if (from === "sqmeter" && to === "sqinch") {
            area = input * 1550;
            area = area.toExponential(2);
        }
        else if (from === "sqmeter" && to === "hect") {
            area = input / 10000;
            area = area.toFixed(6);
        }
        else if (from === "sqmeter" && to === "acre") {
            area = input / 4046.85;
            area = area.toFixed(4);
        }

        else if (from === "sqcent" && to === "sqmeter") {
            area = input / 10000;
            area = area.toFixed(2);
        }
        else if (from === "sqcent" && to === "sqkilo") {
            area = input / (10 ** 10);
            area = area.oExponential(2);
        }
        else if (from === "sqcent" && to === "sqcent") {
            area = input;
        }
        else if (from === "sqcent" && to === "sqmilli") {
            area = input * 100;
            area = area.toFixed(2);
        }
        else if (from === "sqcent" && to === "sqdeci") {
            area = input / 100;
            area = area.toFixed(2);
        }
        else if (from === "sqcent" && to === "sqmile") {
            area = input / (2.59 * 10 ** 10);
            area = area.toExponential(2);
        }
        else if (from === "sqcent" && to === "sqyard") {
            area = input / 8361.2736;
            area = area.toFixed(4);
        }
        else if (from === "sqcent" && to === "sqfoot") {
            area = input / 929.0304;
            area = area.toFixed(4);
        }
        else if (from === "sqcent" && to === "sqinch") {
            area = input / 6.4516;
            area = area.toFixed(2);
        }
        else if (from === "sqcent" && to === "hect") {
            area = input / 100000000;
            area = area.toExponential(2);
        }
        else if (from === "sqcent" && to === "acre") {
            area = input / (4.0469 * 10 ** 7);
            area = area.toFixed(1);
        }
        else if (from === "sqmilli" && to === "sqmeter") {
            area = input / (10 ** 6);
            area = area.toExponential(2);
        }
        else if (from === "sqmilli" && to === "sqkillo") {
            area = input / (10 ** 12);
            area = area.toExponential(2);
        }
        else if (from === "sqmilli" && to === "sqcent") {
            area = input / 100;
            area = area.toFixed(2);
        }
        else if (from === "sqmilli" && to === "sqmilli") {
            area = input;
        }
        else if (from === "sqmilli" && to === "sqdeci") {
            area = input / 10000;
            area = toFixed(2);
        }
        else if (from === "sqmilli" && to === "sqmile") {
            area = input / (2.59 * 10 ** 12);
            area = area.toExponential(4);
        }
        else if (from === "sqmilli" && to === "sqyard") {
            area = input / 836127.36;
            area = area.toFixed(4);
        }
        else if (from === "sqmilli" && to === "sqfoot") {
            area = input / 92903;
            area = area.toFixed(2);
        }
        else if (from === "sqmilli" && to === "sqinch") {
            area = input / 645.16;
            area = area.toExponential(2);
        }
        else if (from === "sqmilli" && to === "hect") {
            area = input / (10 ** 10);
            area = area.toExponential(2);
        }
        else if (from === "sqmilli" && to === "acre") {
            area = input / (4.0469 * 10 ** 9);
            area = area.toExponential(2);
        }

        else if (from === "sqdeci" && to === "sqmeter") {
            area = input / 100;
            area = area.toFixed(2);
        }
        else if (from === "sqdeci" && to === "sqkilo") {
            area = input / (10 ** 8);
            area = area.toExponential(2);
        }
        else if (from === "sqdeci" && to === "sqcent") {
            area = input * 100;
            area = area.toFixed(2);
        }
        else if (from === "sqdeci" && to === "sqmilli") {
            area = input * 10000;
            area = area.toFixed(2);
        }
        else if (from === "sqdeci" && to === "sqdeci") {
            area = input;
        }
        else if (from === "sqdeci" && to === "sqmile") {
            area = input / (2.59 * 10 ** 8);
            area = area.toExponential(2);
        }
        else if (from === "sqdeci" && to === "sqyard") {
            area = input / 83.6127;
            area = area.toFixed(2);
        }
        else if (from === "sqdeci" && to === "sqfoot") {
            area = input / 9.290304;
            area = area.toFixed(2);
        }
        else if (from === "sqdeci" && to === "sqinch") {
            area = input * 15.5;
            area = area.toFixed(2);
        }
        else if (from === "sqdeci" && to === "hect") {
            area = input / 1000000;
            area = area.toExponential(2);
        }
        else if (from === "sqdeci" && to === "acre") {
            area = input / 404685;
            area = area.toFixed(7);
        }
        else if (from === "sqmile" && to === "sqmeter") {
            area = input * (2.59 * 10 ** 6);
            area = area.toExponential(2);
        }
        else if (from === "sqmile" && to === "sqkilo") {
            area = input * 2.58998811;
            area = area.toFixed(4);
        }
        else if (from === "sqmile" && to === "sqcent") {
            area = input * (2.59 * 10 ** 10);
            area = area.toExponential(2);
        }
        else if (from === "sqmile" && to === "sqmilli") {
            area = input * (2.59 * 10 ** 12);
            area = area.toExponential(2);
        }
        else if (from === "sqmile" && to === "sqdeci") {
            area = input * (2.59 * 10 ** 8);
            area = area.toExponential(2);
        }
        else if (from === "sqmile" && to === "sqmile") {
            area = input;
        }
        else if (from === "sqmile" && to === "sqyard") {
            area = input * 3097600;
            area = area.toExponential(2);
        }
        else if (from === "sqmile" && to === "sqfoot") {
            area = input * (2.7878 * 10 ** 7);
            area = area.toExponential(2);
        }
        else if (from === "sqmile" && to === "sqinch") {
            area = input * (4.0145 * 10 ** 9);
            area = area.toExponential(2);
        }
        else if (from === "sqmile" && to === "hect") {
            area = input * 258.998811;
            area = area.toFixed(4);
        }
        else if (from === "sqmile" && to === "acre") {
            area = input * 640;
            area = area.toFixed(1);
        }

        else if (from === "sqyard" && to === "sqmeter") {
            area = input / 1.19599005;
            area = area.toFixed(4);
        }
        else if (from === "sqyard" && to === "sqkilo") {
            area = input / (1.1960 * 10 ** 6);
            area = area.toExponential(2);
        }
        else if (from === "sqyard" && to === "sqcent") {
            area = input * 8361.2736;
            result = area.toFixed(4);
        }
        else if (from === "sqyard" && to === "sqmilli") {
            area = input * 836127.36;
            area = area.toFixed(2);
        }
        else if (from === "sqyard" && to === "sqdeci") {
            area = input * 83.612736;
            area = area.toFixed(4);
        }
        else if (from === "sqyard" && to === "sqmile") {
            area = input / (3.0976 * 10 ** 6);
            area = area.toExponential(2);
        }
        else if (from === "sqyard" && to === "sqyard") {
            area = input;
        }
        else if (from === "sqyard" && to === "sqfoot") {
            area = input * 9;
            area = area.toFixed(2);
        }
        else if (from === "sqyard" && to === "sqinch") {
            area = input * 1296;
            area = area.toFixed(2);
        }
        else if (from === "sqyard" && to === "hect") {
            area = input / 11959.9005;
            area = area.toFixed(7);
        }
        else if (from === "sqyard" && to === "acre") {
            area = input / 4840;
            area = area.toFixed(4);
        }
        else if (from === "sqfoot" && to === "sqmeter") {
            area = input / 10.7639;
            area = area.toFixed(2);
        }
        else if (from === "sqfoot" && to === "sqkillo") {
            area = input / (1.0764 * 10 ** 7);
            area = area.toExponential(2);
        }
        else if (from === "sqfoot" && to === "sqcent") {
            area = input * 929.0304;
            area = area.toFixed(2);
        }
        else if (from === "sqfoot" && to === "sqmilli") {
            area = input * 92903.04;
            area = area.toFixed(2);
        }
        else if (from === "sqfoot" && to === "sqdeci") {
            area = input * 9.2903;
            area = area.toFixed(4);
        }
        else if (from === "sqfoot" && to === "sqmile") {
            area = input / (2.7878 * 10 ** 7);
            area = area.toExponential(2);
        }
        else if (from === "sqfoot" && to === "sqyard") {
            area = input / 9;
            area = area.toFixed(2);
        }
        else if (from === "sqfoot" && to === "sqfoot") {
            area = input;
        }
        else if (from === "sqfoot" && to === "sqinch") {
            area = input * 144;
            area = area.toFixed(2);
        }
        else if (from === "sqfoot" && to === "hect") {
            area = input / 107639.104;
            area = area.toFixed(7);
        }
        else if (from === "sqfoot" && to === "acre") {
            area = input / 43560;
            area = area.toFixed(4);
        }

        else if (from === "sqinch" && to === "sqmeter") {
            area = input / 1550;
            area = area.toFixed(2);
        }
        else if (from === "sqinch" && to === "sqkillo") {
            area = input / (1.55 * 10 ** 9);
            area = area.toExponential(2);
        }
        else if (from === "sqinch" && to === "sqcent") {
            area = input * 6.4516;
            area = area.toFixed(2);
        }
        else if (from === "sqinch" && to === "sqmilli") {
            area = input * 645.16;
            area = area.toFixed(2);
        }
        else if (from === "sqinch" && to === "sqdeci") {
            area = input / 15.5;
            area = area.toFixed(2);
        }
        else if (from === "sqinch" && to === "sqmile") {
            area = input / (4.0145 * 10 ** 9);
            area = area.toExponential(2);
        }
        else if (from === "sqinch" && to === "sqyard") {
            area = input / 1296;
            area = area.toFixed(2);
        }
        else if (from === "sqinch" && to === "sqfoot") {
            area = input / 144;
            area = area.toFixed(2);
        }
        else if (from === "sqinch" && to === "sqinch") {
            area = input;
        }
        else if (from === "sqinch" && to === "hect") {
            area = input / (1.55 * 10 ** 7);
            area = area.toExponential(2);
        }
        else if (from === "sqinch" && to === "acre") {
            area = input / (6.2726 * 10 ** 6);
            area = area.toExponential(2);
        }

        else if (from === "hect" && to === "sqmeter") {
            area = input * 10000;
            area = area.toFixed(1);
        }
        else if (from === "hect" && to === "sqkillo") {
            area = input / 100;
            area = area.toFixed(1);
        }
        else if (from === "hect" && to === "sqcent") {
            area = input * 100000000;
            area = area.toExponential(2);
        }
        else if (from === "hect" && to === "sqmilli") {
            area = input * (10 ** 10);
            area = area.toExponential(2);
        }
        else if (from === "hect" && to === "sqdeci") {
            area = input * 1000000;
            area = area.toFixed(1);
        }
        else if (from === "hect" && to === "sqmile") {
            area = input / 258.998811;
            area = area.toFixed(2);
        }
        else if (from === "hect" && to === "sqyard") {
            area = input * 11959.9005;
            area = area.toFixed(2);
        }
        else if (from === "hect" && to === "sqfoot") {
            area = input * 107639;
            area = area.toFixed(1);
        }
        else if (from === "hect" && to === "sqinch") {
            area = input * (1.55 * 10 ** 7);
            area = area.toFixed(2);
        }
        else if (from === "hect" && to === "hect") {
            area = input;
        }
        else if (from === "hect" && to === "acre") {
            area = input * 2.47105381;
            area = area.toFixed(4);
        }

        else if (from === "acre" && to === "sqmeter") {
            area = input * 4046.8564;
            area = area.toFixed(1);
        }
        else if (from === "acre" && to === "sqkillo") {
            area = input / 247.104;
            area = area.toFixed(2);
        }
        else if (from === "acre" && to === "sqcent") {
            area = input * (4.0469 * 10 ** 7);
            area = area.toExponential(2);
        }
        else if (from === "acre" && to === "sqmilli") {
            area = input * (4.0469 * 10 ** 9);
            area = area.toExponential(2);
        }
        else if (from === "acre" && to === "sqdeci") {
            area = input * 404685.6;
            area = area.toFixed(1);
        }
        else if (from === "acre" && to === "sqmile") {
            area = input / 640;
            area = area.toFixed(2);
        }
        else if (from === "acre" && to === "sqyard") {
            area = input * 4840;
            area = area.toFixed(2);
        }
        else if (from === "acre" && to === "sqfoot") {
            area = input * 43560;
            area = area.toFixed(1);
        }
        else if (from === "acre" && to === "sqinch") {
            area = input * 6272640;
            area = area.toFixed(2);
        }
        else if (from === "acre" && to === "hect") {
            area = input / 2.47105381;
            area = area.toFixed(2);
        }
        else if (from === "acre" && to === "acre") {
            area = input;
        }
        document.getElementById("area2").value = area;
    }
}
let a = new Area;
class Volume {
    vconvert() {
        const input = document.getElementById("volume1").value;
        const from = document.getElementById("volume11").value;
        const to = document.getElementById("volume12").value;
        let volume;
        if (from === "cmeter" && to === "ckilo") {
            volume = input / (10 ** 9);
            volume = volume.toExponential(2);
        }
        else if (from === "cmeter" && to === "cmeter") {
            volume = input;
        }
        else if (from === "cmeter" && to === "ccent") {
            volume = input * (10 ** 6);
            volume = volume.toExponential(2);
        }
        else if (from === "cmeter" && to === "liter") {
            volume = input * 1000;
            volume = volume.toFixed(2);
        }
        else if (from === "cmeter" && to === "mliter") {
            volume = input * (10 ** 6);
            volume = volume.toExponential(2);
        }
        else if (from === "cmeter" && to === "cfoot") {
            volume = input * 35.315;
            volume = volume.toFixed(2);
        }
        else if (from === "cmeter" && to === "cinch") {
            volume = input * 61023.7;
            volume = volume.toFixed(2);
        }

        else if (from === "ckilo" && to === "cmeter") {
            volume = input * (10 ** 9);
            volume = volume.toExponential(2);
        }
        else if (from === "ckilo" && to === "ckilo") {
            volume = input;
        }
        else if (from === "ckilo" && to === "ccent") {
            volume = input * (10 ** 15);
            volume = volume.toExponential(2);
        }
        else if (from === "ckilo" && to === "liter") {
            volume = input * (10 ** 12);
            volume = volume.toExponential(2);
        }
        else if (from === "ckilo" && to === "mliter") {
            volume = input * (10 ** 15);
            volume = volume.toExponential(2);
        }
        else if (from === "ckilo" && to === "cfoot") {
            volume = input * (3.5315 * 10 ** 10);
            volume = volume.toExponential(2);
        }
        else if (from === "ckilo" && to === "cinch") {
            volume = input * (6.10237 * 10 ** 13);
            volume = volume.toExponential(2);
        }

        else if (from === "ccent" && to === "cmeter") {
            volume = input / (10 ** 6);
            volume = volume.toExponential(2);
        }
        else if (from === "ccent" && to === "ckilo") {
            volume = input / (10 ** 10);
            volume = volume.toExponential(2);
        }
        else if (from === "ccent" && to === "ccent") {
            volume = input;
        }
        else if (from === "ccent" && to === "liter") {
            volume = input / 1000;
            volume = volume.toFixed(4);
        }
        else if (from === "ccent" && to === "mliter") {
            volume = input;
        }
        else if (from === "ccent" && to === "cfoot") {
            volume = input / 28320;
            volume = volume.toFixed(5);
        }
        else if (from === "ccent" && to === "cinch") {
            volume = input / 16.387;
            volume = volume.toFixed(2);
        }

        else if (from === "liter" && to === "cmeter") {
            volume = input / 1000;
            volume = volume.toFixed(4);
        }
        else if (from === "liter" && to === "ckilo") {
            volume = input / (10 ** 12);
            volume = volume.toExponential(2);
        }
        else if (from === "liter" && to === "ccent") {
            volume = input * (1000);
            volume = volume.toFixed(2);
        }
        else if (from === "liter" && to === "mliter") {
            volume = input * (1000);
            volume = volume.toFixed(2);
        }
        else if (from === "liter" && to === "cfoot") {
            volume = input / 28.317;
            volume = volume.toFixed(2);
        }
        else if (from === "liter" && to === "cinch") {
            volume = input * 61.024;
            volume = volume.toFixed(2);
        }
        else if (from === "liter" && to === "liter") {
            volume = input * (6.10237 * 10 ** 13);
            volume = volume.toExponential(2);
        }

        else if (from === "mliter" && to === "cmeter") {
            volume = input / (10 ** 6);
            volume = volume.toExponential(2);
        }
        else if (from === "mliter" && to === "ckilo") {
            volume = input / (10 ** 15);
            volume = volume.toExponential(2);
        }
        else if (from === "mliter" && to === "ccent") {
            volume = input;
        }
        else if (from === "mliter" && to === "liter") {
            volume = input / 1000;
            volume = volume.toFixed(5);
        }
        else if (from === "mliter" && to === "mliter") {
            volume = input;
        }
        else if (from === "mliter" && to === "cfoot") {
            volume = input / 28320;
            volume = volume.toFixed(2);
        }
        else if (from === "mliter" && to === "cinch") {
            volume = input / 16.387;
            volume = volume.toFixed(2);
        }

        else if (from === "cfoot" && to === "cmeter") {
            volume = input / 35.315;
            volume = volume.toFixed(2);
        }
        else if (from === "cfoot" && to === "ckilo") {
            volume = input / (3.531 * 10 ** 10);
            volume = toExponential(2);
        }
        else if (from === "cfoot" && to === "ccent") {
            volume = input * 28316.8;
            volume = volume.toFixed(2);
        }
        else if (from === "cfoot" && to === "liter") {
            volume = input * 28.317;
            volume = volume.toFixed(2);
        }
        else if (from === "cfoot" && to === "mliter") {
            volume = input * 28316.8;
            volume = volume.toFixed(2);
        }
        else if (from === "cfoot" && to === "cfoot") {
            volume = input;
        }
        else if (from === "cfoot" && to === "cinch") {
            volume = input * 1728;
            volume = volume.toFixed(2);
        }

        else if (from === "cinch" && to === "cmeter") {
            volume = input / 61020;
            volume = volume.toFixed(2);
        }
        else if (from === "cinch" && to === "ckilo") {
            volume = input / (6.102 * 10 ** 13);
            volume = volume.toExponential(2);
        }
        else if (from === "cinch" && to === "ccent") {
            volume = input * 16.387;
            volume = volume.toFixed(2);
        }
        else if (from === "cinch" && to === "liter") {
            volume = input / 61.024;
            volume = volume.toFixed(2);
        }
        else if (from === "cinch" && to === "mliter") {
            volume = input * 16.387;
            volume = volume.toFixed(2);
        }
        else if (from === "cinch" && to === "cfoot") {
            volume = input / 1728;
            volume = volume.toFixed(2);
        }
        else if (from === "cinch" && to === "cinch") {
            volume = input;
        }
        document.getElementById("volume2").value = volume;
    }
}
let v = new Volume;
class weight {
    wconvert() {
        const input = document.getElementById("weight1").value;
        const from = document.getElementById("weight11").value;
        const to = document.getElementById("weight12").value;
        let weight;
        if (from === "kgram" && to === "kgram") {
            weight = input;
        }
        else if (from === "kgram" && to === "gram") {
            weight = input * 1000;
            weight = weight.toFixed(2);
        }
        else if (from === "kgram" && to === "millig") {
            weight = input * 1000000;
            weight = weight.toFixed(2);
        } else if (from === "kgram" && to === "ounce") {
            weight = input * 35.274;
            weight = weight.toFixed(2);
        } else if (from === "kgram" && to === "pound") {
            weight = input * 2.205;
            weight = weight.toFixed(2);
        } else if (from === "kgram" && to === "carrat") {
            weight = input * 5000;
            weight = weight.toFixed(2);
        } else if (from === "kgram" && to === "tonne") {
            weight = input / 1016.046;
            weight = weight.toFixed(2);
        } else if (from === "gram" && to === "gram") {
            weight = input;
        } else if (from === "gram" && to === "kgram") {
            weight = input / 1000;
            weight = weight.toFixed(2);
        } else if (from === "gram" && to === "millig") {
            weight = input * 1000;
            weight = weight.toFixed(2);
        } else if (from === "gram" && to === "ounce") {
            weight = input / 28.3495;
            weight = weight.toFixed(2);
        } else if (from === "gram" && to === "pound") {
            weight = input / 453.59;
            weight = weight.toFixed(2);
        } else if (from === "gram" && to === "carrat") {
            weight = input * 5;
            weight = weight.toFixed(2);
        } else if (from === "gram" && to === "tonne") {
            weight = input / (1.0160 * 10 ** 6);
            weight = weight.toExponential(2);
        } else if (from === "millig" && to === "gram") {
            weight = input / 1000;
            weight = weight.toFixed(2);
        } else if (from === "millig" && to === "kgram") {
            weight = input / 1000000;
            weight = weight.toFixed(2);
        } else if (from === "millig" && to === "millig") {
            weight = input;
        } else if (from === "millig" && to === "ounce") {
            weight = input / 28349.52;
            weight = weight.toFixed(2);
        } else if (from === "millig" && to === "pound") {
            weight = input / 453592.37;
            weight = weight.toFixed(2);
        } else if (from === "millig" && to === "carrat") {
            weight = input / 200;
            weight = weight.toFixed(2);
        } else if (from === "millig" && to === "tonne") {
            weight = input / (1.0160 * 10 ** 9);
            weight = weight.toExponential(2);
        } else if (from === "ounce" && to === "gram") {
            weight = input * 28.3495;
            weight = weight.toFixed(2);
        } else if (from === "ounce" && to === "kgram") {
            weight = input / 35.27;
            weight = weight.toFixed(2);
        } else if (from === "ounce" && to === "millig") {
            weight = input * 28549.32;
            weight = weight.toFixed(2);
        } else if (from === "ounce" && to === "ounce") {
            weight = input;
        } else if (from === "ounce" && to === "pound") {
            weight = input / 16;
            weight = weight.toFixed(2);
        } else if (from === "ounce" && to === "carrat") {
            weight = input * 141.74;
            weight = weight.toFixed(2);
        } else if (from === "ounce" && to === "tonne") {
            weight = input / 35840;
            weight = weight.toFixed(2);
        } else if (from === "pound" && to === "gram") {
            weight = input * 453.59;
            weight = weight.toFixed(2);
        } else if (from === "pound" && to === "kgram") {
            weight = input / 2.4046;
            weight = weight.toFixed(2);
        } else if (from === "pound" && to === "millig") {
            weight = input * 453592.37;
            weight = weight.toFixed(2);
        } else if (from === "pound" && to === "ounce") {
            weight = input * 16;
            weight = weight.toFixed(2);
        } else if (from === "pound" && to === "pound") {
            weight = input;
        } else if (from === "pound" && to === "tonne") {
            weight = input / 2240;
            weight = weight.toFixed(2);
        } else if (from === "carrat" && to === "gram") {
            weight = input / 5;
            weight = weight.toFixed(2);
        } else if (from === "carrat" && to === "kgram") {
            weight = input / 5000;
            weight = weight.toFixed(2);
        } else if (from === "carrat" && to === "millig") {
            weight = input * 200;
            weight = weight.toFixed(2);
        } else if (from === "carrat" && to === "ounce") {
            weight = input / 141.74;
            weight = weight.toFixed(2);
        } else if (from === "carrat" && to === "pound") {
            weight = input / 2267.96;
            weight = weight.toFixed(2);
        } else if (from === "carrat" && to === "carrat") {
            weight = input;
        } else if (from === "carrat" && to === "tonne") {
            weight = input / (5.0802 * 10 ** 6);
            weight = weight.toExponential(2);
        } else if (from === "tonne" && to === "gram") {
            weight = input * (1.0160 * 10 ** 6);
            weight = weight.toExponential(2);
        } else if (from === "tonne" && to === "kgram") {
            weight = input * 1016.04;
            weight = weight.toFixed(2);
        } else if (from === "tonne" && to === "millig") {
            weight = input * (1.0160 * 10 ** 6);
            weight = weight.toExponential(2);
        } else if (from === "tonne" && to === "ounce") {
            weight = input * 35840;
            weight = weight.toFixed(2);
        } else if (from === "tonne" && to === "pound") {
            weight = input * 2240;
            weight = weight.toFixed(2);
        } else if (from === "tonne" && to === "carrat") {
            weight = input * (5.0802 * 10 ** 6);
            weight = weight.toExponential(2);
        } else if (from === "tonne" && to === "tonne") {
            weight = input;
        }
        document.getElementById("weight2").value = weight;
    }
}
let w = new weight;
class Time {
    timeconvert() {
        const input = document.getElementById("time1").value;
        const from = document.getElementById("time11").value;
        const to = document.getElementById("time12").value;
        let time;
        if (from === "second" && to === "second") {
            time = input;
        }
        else if (from === "second" && to === "millis") {
            time = input * 1000;
        }
        else if (from === "second" && to === "minute") {
            time = input / 60;
        }
        else if (from === "second" && to === "hour") {
            time = input / 3600;
        }
        else if (from === "second" && to === "day") {
            time = input / 86400;
        }
        else if (from === "second" && to === "week") {
            time = input / 604800;
            time = time.toExponential(2);
        }
        else if (from === "second" && to === "month") {
            time = input / 2628000;
            time = time.toExponential(2);
        }
        else if (from === "second" && to === "year") {
            time = input / 31536000;
            time = time.toExponential(2);
        }

        else if (from === "millis" && to === "second") {
            time = input / 1000;
            time = time.toFixed(5);
        }
        else if (from === "millis" && to === "millis") {
            time = input;
        }
        else if (from === "millis" && to === "minute") {
            time = input / 60000;
            time = time.toFixed(6);
        }
        else if (from === "millis" && to === "hour") {
            time = input / (3.600 * 10 ** 6);
            time = time.toExponential(2);
        }
        else if (from === "millis" && to === "day") {
            time = input / 86400000;
            time = time.toExponential(2);
        }
        else if (from === "millis" && to === "week") {
            time = input / 604800000;
            time = time.toExponential(2);
        }
        else if (from === "millis" && to === "month") {
            time = input / (2.628 * 10 ** 9);
            time = time.toExponential(2);
        }
        else if (from === "millis" && to === "year") {
            time = input / (3.1536 * 10 ** 10);
            time = time.toExponential(2);
        }

        else if (from === "minute" && to === "second") {
            time = input * 60;
        }
        else if (from === "minute" && to === "millis") {
            time = input / 60000;
            time = time.toFixed(6);
        }
        else if (from === "minute" && to === "minute") {
            time = input;
        }
        else if (from === "minute" && to === "hour") {
            time = input / 60;
        }
        else if (from === "minute" && to === "day") {
            time = input / 1440;
        }
        else if (from === "minute" && to === "week") {
            time = input / 10080;
            time = time.toExponential(2);
        }
        else if (from === "minute" && to === "month") {
            time = input / 43800;
            time = time.toFixed(6);
        }
        else if (from === "minute" && to === "year") {
            time = input / 525600;
            time = time.toExponential(2);
        }


        else if (from === "hour" && to === "second") {
            time = input * 3600;
        }
        else if (from === "hour" && to === "millis") {
            time = input * (3.6 * 10 ** 9);
            time = time.toExponential(2);
        }
        else if (from === "hour" && to === "minute") {
            time = input * 60;
        }
        else if (from === "hour" && to === "hour") {
            time = input;
        }
        else if (from === "hour" && to === "day") {
            time = input / 24;
        }
        else if (from === "hour" && to === "week") {
            time = input / 168;
        }
        else if (from === "hour" && to === "month") {
            time = input / 730;
        }
        else if (from === "hour" && to === "year") {
            time = input / 8760;
            time = time.toFixed(5);
        }

        else if (from === "day" && to === "second") {
            time = input * 86400;
        }
        else if (from === "day" && to === "millis") {
            time = input * (8.64 * 10 ** 7);
            time = time.toExponential(2);
        }
        else if (from === "day" && to === "minute") {
            time = input * 1440;
        }
        else if (from === "day" && to === "hour") {
            time = input * 24;
        }
        else if (from === "day" && to === "day") {
            time = input;
        }
        else if (from === "day" && to === "week") {
            time = input * 7;
        }
        else if (from === "day" && to === "month") {
            time = input / 30.4166667;
        }
        else if (from === "day" && to === "year") {
            time = input / 365;
        }
        
        else if (from === "week" && to === "second") {
            time = input * 604800;
            time = time.toExponential(4);
        }
        else if (from === "week" && to === "millis") {
            time = input * (6.048 * 10 ** 8);
            time = time.toExponential(4);
        }
        else if (from === "week" && to === "minute") {
            time = input * 10080;
        }
        else if (from === "month" && to === "hour") {
            time = input * 168;
        }
        else if (from === "week" && to === "day") {
            time = input * 7;
        }
        else if (from === "week" && to === "week") {
            time = input;
        }
        else if (from === "week" && to === "month") {
            time = input/ 4.345;
        }

        else if (from === "month" && to === "second") {
            time = input * 2628000;
            time = time.toExponential(2);

        }
        else if (from === "month" && to === "millis") {
            time = input * (2.628 * 10 ** 9);
            time = time.toExponential(4);
        }
        else if (from === "month" && to === "minute") {
            time = input * 43800;
        }
        else if (from === "month" && to === "hour") {
            time = input * 730;
        }
        else if (from === "month" && to === "day") {
            time = input * 30.4166667;
        }
        else if (from === "month" && to === "week") {
            time = input * 4.3852381;
        }
        else if (from === "month" && to === "month") {
            time = input;
        }
        else if (from === "month" && to === "year") {
            time = input / 12;
        }

        else if (from === "year" && to === "second") {
            time = input * 31536000;
            time = time.toExponential(2);
        }
        else if (from === "year" && to === "millis") {
            time = input * (3.1536 * 10 ** 10);
            time = toExponential(2);
        }
        else if (from === "year" && to === "minute") {
            time = input * 525600;
            time = time.toExponential(2);
        }
        else if (from === "minute" && to === "hour") {
            time = input * 8760;
        }
        else if (from === "year" && to === "day") {
            time = input * 365;
        }
        else if (from === "year" && to === "week") {
            time = input * 52.1428571;
        }
        else if (from === "year" && to === "month") {
            time = input * 12;
        }
        else if (from === "year" && to === "year") {
            time = input;
        }
        document.getElementById("time2").value = time;
    }
}
let time = new Time;
function openTab(evt, unitName) {
    var i, tabcontent, tablink;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablink = document.getElementsByClassName("tablink");
    for (i = 0; i < tablink.length; i++) {
        tablink[i].className = tablink[i].className.replace(" active", "");
    }
    document.getElementById(unitName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();
