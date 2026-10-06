#!/usr/bin/env node
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/emoji-regex/index.js
var require_emoji_regex = __commonJS({
  "node_modules/emoji-regex/index.js"(exports, module) {
    module.exports = () => {
      return /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E-\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED8\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFE])))?))?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3C-\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE8A\uDE8E-\uDEC2\uDEC6\uDEC8\uDECD-\uDEDC\uDEDF-\uDEEA\uDEEF]|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
    };
  }
});

// src/context-monitor.ts
import { existsSync, mkdirSync, openSync, readFileSync as readFileSync2, readSync, closeSync, statSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

// node_modules/@aeriondyseti/plugin-kit/dist/chunk-534DPWH2.js
import { readFileSync } from "fs";
var _testStdin;
function readStdinSync() {
  if (_testStdin !== void 0) return _testStdin;
  return readFileSync(0, "utf8");
}

// node_modules/@aeriondyseti/plugin-kit/dist/chunk-VNLZ7HAW.js
import { writeSync } from "fs";
var _CAPTURED_SENTINEL = /* @__PURE__ */ Symbol("plugin-kit:captured");
var _capture;
function emitJson(payload, exitCode = 0) {
  return emitRaw(payload, JSON.stringify(payload), exitCode);
}
function emitRaw(payload, serialized, exitCode) {
  if (_capture) {
    _capture.payload = payload;
    _capture.exitCode = exitCode;
    throw _CAPTURED_SENTINEL;
  }
  writeSync(1, serialized);
  process.exit(exitCode);
}
var HookParseError = class extends Error {
  constructor(parseError) {
    super(`plugin-kit: ${parseError}`);
    this.parseError = parseError;
    this.name = "HookParseError";
  }
  parseError;
  exitCode = 2;
};
function readHookInput(expected) {
  const raw = readStdinSync();
  let json;
  try {
    json = JSON.parse(raw);
  } catch (e) {
    throw new HookParseError(`failed to parse stdin as JSON (${e.message})`);
  }
  if (json.hook_event_name !== expected) {
    throw new HookParseError(
      `this script expects a ${expected} hook, but got hook_event_name="${json.hook_event_name}". Check settings.json \u2014 the script is wired to the wrong event.`
    );
  }
  return json;
}

// node_modules/ansi-regex/index.js
function ansiRegex({ onlyFirst = false } = {}) {
  const ST = "(?:\\u0007|\\u001B\\u005C|\\u009C)";
  const osc = `(?:\\u001B\\][\\s\\S]*?${ST})`;
  const csi = "[\\u001B\\u009B][[\\]()#;?]*(?:\\d{1,4}(?:[;:]\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]";
  const pattern = `${osc}|${csi}`;
  return new RegExp(pattern, onlyFirst ? void 0 : "g");
}

// node_modules/strip-ansi/index.js
var regex = ansiRegex();
function stripAnsi(string) {
  if (typeof string !== "string") {
    throw new TypeError(`Expected a \`string\`, got \`${typeof string}\``);
  }
  if (!string.includes("\x1B") && !string.includes("\x9B")) {
    return string;
  }
  return string.replace(regex, "");
}

// node_modules/get-east-asian-width/lookup-data.js
var ambiguousRanges = [161, 161, 164, 164, 167, 168, 170, 170, 173, 174, 176, 180, 182, 186, 188, 191, 198, 198, 208, 208, 215, 216, 222, 225, 230, 230, 232, 234, 236, 237, 240, 240, 242, 243, 247, 250, 252, 252, 254, 254, 257, 257, 273, 273, 275, 275, 283, 283, 294, 295, 299, 299, 305, 307, 312, 312, 319, 322, 324, 324, 328, 331, 333, 333, 338, 339, 358, 359, 363, 363, 462, 462, 464, 464, 466, 466, 468, 468, 470, 470, 472, 472, 474, 474, 476, 476, 593, 593, 609, 609, 708, 708, 711, 711, 713, 715, 717, 717, 720, 720, 728, 731, 733, 733, 735, 735, 768, 879, 913, 929, 931, 937, 945, 961, 963, 969, 1025, 1025, 1040, 1103, 1105, 1105, 8208, 8208, 8211, 8214, 8216, 8217, 8220, 8221, 8224, 8226, 8228, 8231, 8240, 8240, 8242, 8243, 8245, 8245, 8251, 8251, 8254, 8254, 8308, 8308, 8319, 8319, 8321, 8324, 8364, 8364, 8451, 8451, 8453, 8453, 8457, 8457, 8467, 8467, 8470, 8470, 8481, 8482, 8486, 8486, 8491, 8491, 8531, 8532, 8539, 8542, 8544, 8555, 8560, 8569, 8585, 8585, 8592, 8601, 8632, 8633, 8658, 8658, 8660, 8660, 8679, 8679, 8704, 8704, 8706, 8707, 8711, 8712, 8715, 8715, 8719, 8719, 8721, 8721, 8725, 8725, 8730, 8730, 8733, 8736, 8739, 8739, 8741, 8741, 8743, 8748, 8750, 8750, 8756, 8759, 8764, 8765, 8776, 8776, 8780, 8780, 8786, 8786, 8800, 8801, 8804, 8807, 8810, 8811, 8814, 8815, 8834, 8835, 8838, 8839, 8853, 8853, 8857, 8857, 8869, 8869, 8895, 8895, 8978, 8978, 9312, 9449, 9451, 9547, 9552, 9587, 9600, 9615, 9618, 9621, 9632, 9633, 9635, 9641, 9650, 9651, 9654, 9655, 9660, 9661, 9664, 9665, 9670, 9672, 9675, 9675, 9678, 9681, 9698, 9701, 9711, 9711, 9733, 9734, 9737, 9737, 9742, 9743, 9756, 9756, 9758, 9758, 9792, 9792, 9794, 9794, 9824, 9825, 9827, 9829, 9831, 9834, 9836, 9837, 9839, 9839, 9886, 9887, 9919, 9919, 9926, 9933, 9935, 9939, 9941, 9953, 9955, 9955, 9960, 9961, 9963, 9969, 9972, 9972, 9974, 9977, 9979, 9980, 9982, 9983, 10045, 10045, 10102, 10111, 11094, 11097, 12872, 12879, 57344, 63743, 65024, 65039, 65533, 65533, 127232, 127242, 127248, 127277, 127280, 127337, 127344, 127373, 127375, 127376, 127387, 127404, 917760, 917999, 983040, 1048573, 1048576, 1114109];
var fullwidthRanges = [12288, 12288, 65281, 65376, 65504, 65510];
var halfwidthRanges = [8361, 8361, 65377, 65470, 65474, 65479, 65482, 65487, 65490, 65495, 65498, 65500, 65512, 65518];
var narrowRanges = [32, 126, 162, 163, 165, 166, 172, 172, 175, 175, 10214, 10221, 10629, 10630];
var wideRanges = [4352, 4447, 8986, 8987, 9001, 9002, 9193, 9196, 9200, 9200, 9203, 9203, 9725, 9726, 9748, 9749, 9776, 9783, 9800, 9811, 9855, 9855, 9866, 9871, 9875, 9875, 9889, 9889, 9898, 9899, 9917, 9918, 9924, 9925, 9934, 9934, 9940, 9940, 9962, 9962, 9970, 9971, 9973, 9973, 9978, 9978, 9981, 9981, 9989, 9989, 9994, 9995, 10024, 10024, 10060, 10060, 10062, 10062, 10067, 10069, 10071, 10071, 10133, 10135, 10160, 10160, 10175, 10175, 11035, 11036, 11088, 11088, 11093, 11093, 11904, 11929, 11931, 12019, 12032, 12245, 12272, 12287, 12289, 12350, 12353, 12438, 12441, 12543, 12549, 12591, 12593, 12686, 12688, 12773, 12783, 12830, 12832, 12871, 12880, 42124, 42128, 42182, 43360, 43388, 44032, 55203, 63744, 64255, 65040, 65049, 65072, 65106, 65108, 65126, 65128, 65131, 94176, 94180, 94192, 94198, 94208, 101589, 101631, 101662, 101760, 101874, 110576, 110579, 110581, 110587, 110589, 110590, 110592, 110882, 110898, 110898, 110928, 110930, 110933, 110933, 110948, 110951, 110960, 111355, 119552, 119638, 119648, 119670, 126980, 126980, 127183, 127183, 127374, 127374, 127377, 127386, 127488, 127490, 127504, 127547, 127552, 127560, 127568, 127569, 127584, 127589, 127744, 127776, 127789, 127797, 127799, 127868, 127870, 127891, 127904, 127946, 127951, 127955, 127968, 127984, 127988, 127988, 127992, 128062, 128064, 128064, 128066, 128252, 128255, 128317, 128331, 128334, 128336, 128359, 128378, 128378, 128405, 128406, 128420, 128420, 128507, 128591, 128640, 128709, 128716, 128716, 128720, 128722, 128725, 128728, 128732, 128735, 128747, 128748, 128756, 128764, 128992, 129003, 129008, 129008, 129292, 129338, 129340, 129349, 129351, 129535, 129648, 129660, 129664, 129674, 129678, 129734, 129736, 129736, 129741, 129756, 129759, 129770, 129775, 129784, 131072, 196605, 196608, 262141];

// node_modules/get-east-asian-width/utilities.js
var isInRange = (ranges, codePoint) => {
  let low = 0;
  let high = Math.floor(ranges.length / 2) - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const i = mid * 2;
    if (codePoint < ranges[i]) {
      high = mid - 1;
    } else if (codePoint > ranges[i + 1]) {
      low = mid + 1;
    } else {
      return true;
    }
  }
  return false;
};

// node_modules/get-east-asian-width/lookup.js
var minimumAmbiguousCodePoint = ambiguousRanges[0];
var maximumAmbiguousCodePoint = ambiguousRanges.at(-1);
var minimumFullWidthCodePoint = fullwidthRanges[0];
var maximumFullWidthCodePoint = fullwidthRanges.at(-1);
var minimumHalfWidthCodePoint = halfwidthRanges[0];
var maximumHalfWidthCodePoint = halfwidthRanges.at(-1);
var minimumNarrowCodePoint = narrowRanges[0];
var maximumNarrowCodePoint = narrowRanges.at(-1);
var minimumWideCodePoint = wideRanges[0];
var maximumWideCodePoint = wideRanges.at(-1);
var commonCjkCodePoint = 19968;
var [wideFastPathStart, wideFastPathEnd] = findWideFastPathRange(wideRanges);
function findWideFastPathRange(ranges) {
  let fastPathStart = ranges[0];
  let fastPathEnd = ranges[1];
  for (let index = 0; index < ranges.length; index += 2) {
    const start = ranges[index];
    const end = ranges[index + 1];
    if (commonCjkCodePoint >= start && commonCjkCodePoint <= end) {
      return [start, end];
    }
    if (end - start > fastPathEnd - fastPathStart) {
      fastPathStart = start;
      fastPathEnd = end;
    }
  }
  return [fastPathStart, fastPathEnd];
}
var isAmbiguous = (codePoint) => {
  if (codePoint < minimumAmbiguousCodePoint || codePoint > maximumAmbiguousCodePoint) {
    return false;
  }
  return isInRange(ambiguousRanges, codePoint);
};
var isFullWidth = (codePoint) => {
  if (codePoint < minimumFullWidthCodePoint || codePoint > maximumFullWidthCodePoint) {
    return false;
  }
  return isInRange(fullwidthRanges, codePoint);
};
var isWide = (codePoint) => {
  if (codePoint >= wideFastPathStart && codePoint <= wideFastPathEnd) {
    return true;
  }
  if (codePoint < minimumWideCodePoint || codePoint > maximumWideCodePoint) {
    return false;
  }
  return isInRange(wideRanges, codePoint);
};

// node_modules/get-east-asian-width/index.js
function validate(codePoint) {
  if (!Number.isSafeInteger(codePoint)) {
    throw new TypeError(`Expected a code point, got \`${typeof codePoint}\`.`);
  }
}
function eastAsianWidth(codePoint, { ambiguousAsWide = false } = {}) {
  validate(codePoint);
  if (isFullWidth(codePoint) || isWide(codePoint) || ambiguousAsWide && isAmbiguous(codePoint)) {
    return 2;
  }
  return 1;
}

// node_modules/string-width/index.js
var import_emoji_regex = __toESM(require_emoji_regex(), 1);
var segmenter = new Intl.Segmenter();
var defaultIgnorableCodePointRegex = new RegExp("^\\p{Default_Ignorable_Code_Point}$", "u");
function stringWidth(string, options = {}) {
  if (typeof string !== "string" || string.length === 0) {
    return 0;
  }
  const {
    ambiguousIsNarrow = true,
    countAnsiEscapeCodes = false
  } = options;
  if (!countAnsiEscapeCodes) {
    string = stripAnsi(string);
  }
  if (string.length === 0) {
    return 0;
  }
  let width = 0;
  const eastAsianWidthOptions = { ambiguousAsWide: !ambiguousIsNarrow };
  for (const { segment: character } of segmenter.segment(string)) {
    const codePoint = character.codePointAt(0);
    if (codePoint <= 31 || codePoint >= 127 && codePoint <= 159) {
      continue;
    }
    if (codePoint >= 8203 && codePoint <= 8207 || codePoint === 65279) {
      continue;
    }
    if (codePoint >= 768 && codePoint <= 879 || codePoint >= 6832 && codePoint <= 6911 || codePoint >= 7616 && codePoint <= 7679 || codePoint >= 8400 && codePoint <= 8447 || codePoint >= 65056 && codePoint <= 65071) {
      continue;
    }
    if (codePoint >= 55296 && codePoint <= 57343) {
      continue;
    }
    if (codePoint >= 65024 && codePoint <= 65039) {
      continue;
    }
    if (defaultIgnorableCodePointRegex.test(character)) {
      continue;
    }
    if ((0, import_emoji_regex.default)().test(character)) {
      width += 2;
      continue;
    }
    width += eastAsianWidth(codePoint, eastAsianWidthOptions);
  }
  return width;
}

// node_modules/@aeriondyseti/plugin-kit/dist/chunk-5M2T7EMU.js
var _override;
function currentTheme() {
  return {
    colors: _override?.colors ?? detectColors()
  };
}
function detectColors() {
  if (process.env.NO_COLOR) return false;
  if (process.env.FORCE_COLOR === "0") return false;
  return true;
}
var FG = {
  black: 30,
  red: 31,
  green: 32,
  yellow: 33,
  blue: 34,
  magenta: 35,
  cyan: 36,
  white: 37,
  gray: 90,
  grey: 90
};
var BG = Object.fromEntries(
  Object.entries(FG).map(([k, v]) => [k, v + 10])
);
var MOD = { bold: 1, dim: 2, italic: 3, underline: 4 };
var MOD_CLOSE = { bold: 22, dim: 22, italic: 23, underline: 24 };
var ESC = "\x1B[";
var RESET = `${ESC}0m`;
var TAG_RE = /<(\/?)([a-z][a-z0-9_-]*)(?::"([^"]*)")?(\s*\/)?>/gi;
function renderTags(input, theme = currentTheme()) {
  if (!input.includes("<")) return input;
  if (!theme.colors) return stripTags(input);
  let emittedAnsi = false;
  const rendered = input.replace(TAG_RE, (full, slash, tagRaw, attr) => {
    const tag = tagRaw.toLowerCase();
    const code = slash ? closeCode(tag) : openCode(tag, attr);
    if (code === null) return full;
    emittedAnsi = true;
    return code;
  });
  return emittedAnsi ? rendered + RESET : rendered;
}
function openCode(tag, attr) {
  if (tag === "color" && attr) {
    const code = FG[attr.toLowerCase()];
    if (code !== void 0) return `${ESC}${code}m`;
  }
  if (tag === "bg" && attr) {
    const code = BG[attr.toLowerCase()];
    if (code !== void 0) return `${ESC}${code}m`;
  }
  const mod = MOD[tag];
  if (mod !== void 0) return `${ESC}${mod}m`;
  return null;
}
function closeCode(tag) {
  if (tag === "color") return `${ESC}39m`;
  if (tag === "bg") return `${ESC}49m`;
  const mod = MOD_CLOSE[tag];
  if (mod !== void 0) return `${ESC}${mod}m`;
  return null;
}
function stripTags(input) {
  if (!input.includes("<")) return input;
  return input.replace(TAG_RE, "");
}
function visualWidth(input) {
  return stringWidth(stripTags(input));
}

// node_modules/@aeriondyseti/plugin-kit/dist/chunk-XKDT3KOV.js
var ICONS = {
  check: "\u2713",
  cross: "\u2717",
  warn: "\u26A0",
  info: "\u2139",
  arrow: "\u25B8",
  bullet: "\u2022",
  dot: "\xB7",
  star: "\u2605"
};
var GLYPHS = {
  unicode: { full: "\u25B0", empty: "\u25B1", on: "\u25C6", off: "\u25C7", bullet: ICONS.bullet, dot: ICONS.dot },
  ascii: { full: "#", empty: "-", on: "*", off: ".", bullet: "-", dot: "|" }
};
var KEY_PREFIX = "kit:";
function widgetKey(id, name, action) {
  return `${KEY_PREFIX}${encodeURIComponent(id)}:${encodeURIComponent(name)}:${action}`;
}
function describeWidgets(widgets, opts) {
  const children = [];
  let group;
  for (const [name, widget] of Object.entries(widgets)) {
    if (widget.group && widget.group !== group) {
      children.push(text(widget.group, { dimColor: true }));
    }
    group = widget.group;
    children.push(...describeWidget(name, widget, opts));
  }
  return box(children, { key: `${KEY_PREFIX}${encodeURIComponent(opts.id)}`, flexDirection: "column" });
}
function describeWidget(name, widget, opts) {
  const paint = widget.color ? { color: widget.color } : {};
  const label = text(name, { bold: true, ...paint });
  const note = widget.note ? [text(widget.note, { dimColor: true, wrap: "wrap" })] : [];
  const row = (...rest) => box([label, ...rest], { flexDirection: "row", gap: 1 });
  const g = GLYPHS[opts.glyphs ?? "unicode"];
  switch (widget.type) {
    case "text":
    case "counter":
      return [row(text(String(widget.value))), ...note];
    case "meter": {
      const cells = opts.barWidth ?? 10;
      const filled = Math.round(widget.value / widget.max * cells);
      const bar = g.full.repeat(filled) + g.empty.repeat(cells - filled);
      return [row(text(bar, paint), text(`${widget.value}/${widget.max}`)), ...note];
    }
    case "clock": {
      const segments = g.on.repeat(widget.value) + g.off.repeat(widget.of - widget.value);
      return [row(text(segments, paint)), ...note];
    }
    case "tags":
      return [row(text(widget.value.join(` ${g.dot} `) || "(none)", paint)), ...note];
    case "list":
      return [label, ...describeItems(name, widget.value, paint, opts), ...note];
  }
}
function describeItems(name, items, paint, opts) {
  const limit = opts.listLimit ?? 5;
  const isOpen = opts.expanded?.includes(name) ?? false;
  const shown = isOpen ? items : items.slice(0, limit);
  const bullet = GLYPHS[opts.glyphs ?? "unicode"].bullet;
  const lines = shown.map((item) => text(`  ${bullet} ${item}`, paint));
  if (items.length === 0) lines.push(text("  (none)", { dimColor: true }));
  if (items.length > limit) {
    const action = isOpen ? "less" : "more";
    const label = isOpen ? "less" : `+${items.length - limit} more`;
    lines.push(box([button(widgetKey(opts.id, name, action), label)], { paddingLeft: 2 }));
  }
  return lines;
}
function box(children, props) {
  return { type: "Box", props, children };
}
function text(value, props = {}) {
  return { type: "Text", props, children: [value] };
}
function button(key, label) {
  return { type: "Button", props: { key, label } };
}
var COLORS = [
  "black",
  "red",
  "green",
  "yellow",
  "blue",
  "magenta",
  "cyan",
  "white",
  "gray",
  "grey"
];

// node_modules/@aeriondyseti/plugin-kit/dist/index.js
function asString(body) {
  return typeof body === "string" ? body : body.render();
}
function hasHookSpecificFields(hs) {
  return Object.keys(hs).length > 1;
}
function mixinCommon(out, opts) {
  if (opts.toUser !== void 0) out.systemMessage = "\n" + asString(opts.toUser);
  if (opts.continue !== void 0) out.continue = opts.continue;
  if (opts.stopReason !== void 0) out.stopReason = opts.stopReason;
  if (opts.suppressOutput !== void 0) out.suppressOutput = opts.suppressOutput;
  if (opts.terminalSequence !== void 0) out.terminalSequence = opts.terminalSequence;
  return out;
}
var PostToolUse = class {
  static parse() {
    return readHookInput("PostToolUse");
  }
  static emitOutput(opts = {}) {
    const out = mixinCommon({}, opts);
    if (opts.deny) out.decision = "block";
    if (opts.reason !== void 0) out.reason = opts.reason;
    const hs = { hookEventName: "PostToolUse" };
    if (opts.toClaude !== void 0) hs.additionalContext = asString(opts.toClaude);
    if (opts.updatedToolOutput !== void 0) hs.updatedToolOutput = opts.updatedToolOutput;
    if (opts.updatedMCPToolOutput !== void 0) hs.updatedMCPToolOutput = opts.updatedMCPToolOutput;
    if (hasHookSpecificFields(hs)) out.hookSpecificOutput = hs;
    return emitJson(out);
  }
};
var SessionStart = class {
  static parse() {
    return readHookInput("SessionStart");
  }
  static emitOutput(opts = {}) {
    const out = mixinCommon({}, opts);
    const hs = { hookEventName: "SessionStart" };
    if (opts.toClaude !== void 0) hs.additionalContext = asString(opts.toClaude);
    if (opts.initialUserMessage !== void 0) hs.initialUserMessage = opts.initialUserMessage;
    if (opts.sessionTitle !== void 0) hs.sessionTitle = opts.sessionTitle;
    if (opts.watchPaths !== void 0) hs.watchPaths = opts.watchPaths;
    if (opts.reloadSkills !== void 0) hs.reloadSkills = opts.reloadSkills;
    if (hasHookSpecificFields(hs)) out.hookSpecificOutput = hs;
    return emitJson(out);
  }
};
var Stop = class {
  static parse() {
    return readHookInput("Stop");
  }
  static emitOutput(opts = {}) {
    const out = mixinCommon({}, opts);
    if (opts.deny) out.decision = "block";
    if (opts.reason !== void 0) out.reason = opts.reason;
    if (opts.toClaude !== void 0) {
      out.hookSpecificOutput = { hookEventName: "Stop", additionalContext: asString(opts.toClaude) };
    }
    return emitJson(out);
  }
};
function toMarkup(node) {
  if (typeof node === "string") return [node];
  switch (node.type) {
    case "Button":
      return [];
    case "Text":
      return [styled((node.children ?? []).join(""), node)];
    case "Box": {
      const children = (node.children ?? []).map(toMarkup);
      const lines = node.props?.flexDirection === "row" ? [children.map((lines2) => lines2.join(" ")).filter(Boolean).join(" ")] : children.flat();
      const pad = " ".repeat(Number(node.props?.paddingLeft ?? 0));
      return lines.filter((line) => line !== "").map((line) => pad + line);
    }
  }
}
function styled(text2, node) {
  let out = text2;
  const color = node.props?.color;
  if (typeof color === "string" && COLORS.some((c) => c === color)) out = `<color:"${color}">${out}</color>`;
  if (node.props?.bold) out = `<bold>${out}</bold>`;
  if (node.props?.dimColor) out = `<dim>${out}</dim>`;
  return out;
}
function detectWidth() {
  const env = Number(process.env.COLUMNS);
  if (Number.isFinite(env) && env > 20) return env;
  const stderrCols = process.stderr.columns;
  if (stderrCols !== void 0 && stderrCols > 20) return stderrCols;
  return 80;
}
var OutputBuilder = class {
  content = "";
  append(text2) {
    this.content += text2;
    return this;
  }
  appendLine(text2 = "") {
    this.content += text2 + "\n";
    return this;
  }
  /**
   * Append a divider line — `char` repeated as many complete copies as fit
   * in the terminal width (partial trailing copies are not emitted).
   *
   * Width resolution order: `opts.width` → `$COLUMNS` env var →
   * `process.stderr.columns` → 80. We probe stderr, not stdout: in hook
   * scripts stdout is piped to Claude Code, but stderr usually stays
   * attached to the terminal so its `.columns` is the real TTY width.
   * Values ≤ 20 are treated as garbage and fall through to 80.
   *
   * `char` may be multi-cell (emoji, wide glyphs) or contain tag markup —
   * `visualWidth` is used to count cells, so the math stays honest.
   */
  appendDivider(char = "-", opts = {}) {
    const cols = opts.width ?? detectWidth();
    const cellsPerCopy = visualWidth(char);
    const copies = cellsPerCopy > 0 ? Math.floor(cols / cellsPerCopy) : 0;
    const line = char.repeat(copies);
    return this.appendLine(opts.color ? `<color:"${opts.color}">${line}</color>` : line);
  }
  /**
   * Append items as a bulleted list, one per line.
   *
   * Items may contain tag markup — it resolves at render time like any other
   * appended text. Multi-line item strings are not reflowed; the caller owns
   * that.
   */
  appendList(items, opts = {}) {
    const bullet = opts.bullet ?? ICONS.bullet;
    const pad = " ".repeat(opts.indent ?? 0);
    for (const item of items) {
      this.appendLine(`${pad}${bullet} ${item}`);
    }
    return this;
  }
  /**
   * Wrap content in a unicode-drawn box.
   *
   *   ┌─ Title ──────┐
   *   │  line one    │
   *   │  line two    │
   *   └──────────────┘
   *
   * Content may be multi-line and may contain tag markup — width math uses
   * `visualWidth`, so ANSI, CJK, and emoji widths are all counted correctly.
   * A single trailing newline on `content` is dropped so `box('hi\n')`
   * doesn't produce an empty bottom row.
   */
  appendBox(content, opts = {}) {
    const padding = opts.padding ?? 1;
    const title = opts.title ?? "";
    const body = content.endsWith("\n") ? content.slice(0, -1) : content;
    const lines = body.split("\n");
    const contentWidth = Math.max(0, ...lines.map(visualWidth));
    const minForTitle = title ? visualWidth(title) + 3 - padding * 2 : 0;
    const inner = Math.max(contentWidth, minForTitle, 0);
    const totalWidth = inner + padding * 2;
    const hpad = " ".repeat(padding);
    const paint = (s) => opts.color ? `<color:"${opts.color}">${s}</color>` : s;
    const top = title ? paint(`\u250C\u2500 ${title} ${"\u2500".repeat(totalWidth - visualWidth(title) - 3)}\u2510`) : paint(`\u250C${"\u2500".repeat(totalWidth)}\u2510`);
    this.appendLine(top);
    for (const line of lines) {
      const rightPad = " ".repeat(inner - visualWidth(line));
      this.appendLine(`${paint("\u2502")}${hpad}${line}${rightPad}${hpad}${paint("\u2502")}`);
    }
    this.appendLine(paint(`\u2514${"\u2500".repeat(totalWidth)}\u2518`));
    return this;
  }
  /**
   * Render a table. Each row is an array of cell strings (may contain tag
   * markup). Column widths auto-size to the widest cell across header + rows.
   *
   *   ┌────┬─────┐
   *   │ H1 │ H2  │
   *   ├────┼─────┤
   *   │ a  │ bb  │
   *   │ cc │ ddd │
   *   └────┴─────┘
   *
   * Ragged rows are OK — missing cells render as empty. If there are no
   * rows and no headers, the call is a no-op.
   */
  appendTable(rows, opts = {}) {
    const { headers } = opts;
    const allRows = headers ? [headers, ...rows] : rows;
    if (allRows.length === 0) return this;
    const colCount = Math.max(0, ...allRows.map((r) => r.length));
    const widths = [];
    for (let c = 0; c < colCount; c++) {
      widths[c] = Math.max(0, ...allRows.map((r) => visualWidth(r[c] ?? "")));
    }
    const paint = (s) => opts.color ? `<color:"${opts.color}">${s}</color>` : s;
    const border = (l, m, r) => paint(l + widths.map((w) => "\u2500".repeat(w + 2)).join(m) + r);
    const padCell = (text2, width) => text2 + " ".repeat(Math.max(0, width - visualWidth(text2)));
    const renderRow = (cells) => {
      const bar = paint("\u2502");
      const body = widths.map((w, i) => ` ${padCell(cells[i] ?? "", w)} `).join(bar);
      return `${bar}${body}${bar}`;
    };
    this.appendLine(border("\u250C", "\u252C", "\u2510"));
    if (headers) {
      this.appendLine(renderRow(headers));
      this.appendLine(border("\u251C", "\u253C", "\u2524"));
    }
    for (const row of rows) this.appendLine(renderRow(row));
    this.appendLine(border("\u2514", "\u2534", "\u2518"));
    return this;
  }
  /**
   * Widgets, one row each, laid out as plugin-kit draws them in a mod:
   *
   *   Health ▰▰▰▰▰▰▰▱▱▱ 7/10
   *   Suspicion ◆◆◇◇◇◇
   *
   * Lists are never folded (there is nothing to press), and a hex color
   * is dropped (tags know the named colors only).
   */
  appendWidgets(widgets, opts = {}) {
    const tree = describeWidgets(widgets, { id: "output", listLimit: Infinity, ...opts });
    for (const line of toMarkup(tree)) this.appendLine(line);
    return this;
  }
  appendWidget(name, widget, opts = {}) {
    return this.appendWidgets({ [name]: widget }, opts);
  }
  render(theme = currentTheme()) {
    return renderTags(this.content, theme);
  }
  toString() {
    return this.render();
  }
  get isEmpty() {
    return this.content === "";
  }
};
function runHook(fn) {
  try {
    fn();
  } catch (e) {
    if (e instanceof HookParseError) {
      process.stderr.write(`${e.message}
`);
      process.exit(e.exitCode);
    }
    throw e;
  }
}

// src/context-monitor.ts
var CONTEXT_WARN = 1e5;
var CONTEXT_STRONG = 15e4;
var CONTEXT_CRITICAL = 2e5;
var COMPRESS_WARN = 2;
var COMPRESS_STRONG = 4;
var COMPRESS_CRITICAL = 6;
var THROTTLE_SECONDS = 30;
var STATE_DIR = join(tmpdir(), "context-monitor");
var SEVERITY_ORDER = ["info", "warn", "strong", "critical"];
function getStatePath(sessionId) {
  mkdirSync(STATE_DIR, { recursive: true });
  const safe = sessionId.replace(/[^a-zA-Z0-9-]/g, "_");
  return join(STATE_DIR, `${safe}.json`);
}
function loadState(sessionId) {
  const path = getStatePath(sessionId);
  try {
    if (existsSync(path)) {
      return JSON.parse(readFileSync2(path, "utf8"));
    }
  } catch {
  }
  return { last_offset: 0, compressions: 0, context_length: 0, last_checked_at: 0 };
}
function saveState(sessionId, state) {
  try {
    writeFileSync(getStatePath(sessionId), JSON.stringify(state));
  } catch {
  }
}
function analyzeTranscript(transcriptPath, state) {
  if (!existsSync(transcriptPath)) return state;
  const fileSize = statSync(transcriptPath).size;
  if (fileSize <= state.last_offset) return state;
  try {
    const fd = openSync(transcriptPath, "r");
    const buffer = Buffer.alloc(fileSize - state.last_offset);
    readSync(fd, buffer, 0, buffer.length, state.last_offset);
    closeSync(fd);
    let mostRecentUsage = null;
    let mostRecentTime = null;
    for (const line of buffer.toString("utf8").split("\n")) {
      const trimmed = line.trim();
      if (!trimmed) continue;
      let entry;
      try {
        entry = JSON.parse(trimmed);
      } catch {
        continue;
      }
      const usage = entry.message?.usage;
      if (!usage) continue;
      if (entry.isSidechain === true || entry.isApiErrorMessage) continue;
      if (!entry.timestamp) continue;
      const t = new Date(entry.timestamp);
      if (!mostRecentTime || t > mostRecentTime) {
        mostRecentTime = t;
        mostRecentUsage = usage;
      }
    }
    if (mostRecentUsage) {
      state.context_length = (mostRecentUsage.input_tokens ?? 0) + (mostRecentUsage.cache_read_input_tokens ?? 0) + (mostRecentUsage.cache_creation_input_tokens ?? 0);
    }
    state.last_offset = fileSize;
  } catch {
  }
  return state;
}
function maxSeverity(a, b) {
  return SEVERITY_ORDER.indexOf(a) >= SEVERITY_ORDER.indexOf(b) ? a : b;
}
function evaluate(state) {
  const { context_length: ctx, compressions } = state;
  const issues = [];
  let severity = "info";
  if (ctx >= CONTEXT_CRITICAL) {
    issues.push(`Context size is ${ctx.toLocaleString()} tokens (near compression limit)`);
    severity = maxSeverity(severity, "critical");
  } else if (ctx >= CONTEXT_STRONG) {
    issues.push(`Context size is ${ctx.toLocaleString()} tokens (compression approaching)`);
    severity = maxSeverity(severity, "strong");
  } else if (ctx >= CONTEXT_WARN) {
    issues.push(`Context size is ${ctx.toLocaleString()} tokens`);
    severity = maxSeverity(severity, "warn");
  }
  const cWord = compressions === 1 ? "compression" : "compressions";
  if (compressions >= COMPRESS_CRITICAL) {
    issues.push(`${compressions} context ${cWord} detected (significant quality loss likely)`);
    severity = maxSeverity(severity, "critical");
  } else if (compressions >= COMPRESS_STRONG) {
    issues.push(`${compressions} context ${cWord} detected (quality degrading)`);
    severity = maxSeverity(severity, "strong");
  } else if (compressions >= COMPRESS_WARN) {
    issues.push(`${compressions} context ${cWord} detected`);
    severity = maxSeverity(severity, "warn");
  }
  if (issues.length === 0) return null;
  let advice;
  if (severity === "critical") {
    advice = "Commit pending work and start a fresh session \u2014 context quality degrades with each compression cycle.";
  } else if (severity === "strong") {
    advice = "Finish the current task, commit, and start a new session to preserve quality.";
  } else {
    advice = "Context is growing \u2014 break at the next natural boundary (after the current task or commit).";
  }
  return { severity, issues, advice };
}
var TITLE_BY_SEVERITY = {
  info: "Session health",
  warn: "Session health note",
  strong: "Session health warning",
  critical: "Session health \u2014 action recommended"
};
var COLOR_BY_SEVERITY = {
  info: "cyan",
  warn: "yellow",
  strong: "yellow",
  critical: "red"
};
var ICON_BY_SEVERITY = {
  info: ICONS.info,
  warn: ICONS.warn,
  strong: ICONS.warn,
  critical: ICONS.cross
};
function renderVerdict(verdict) {
  const color = COLOR_BY_SEVERITY[verdict.severity];
  const icon = ICON_BY_SEVERITY[verdict.severity];
  const builder = new OutputBuilder().appendBox(
    verdict.issues.map((i) => `${icon} ${i}`).join("\n"),
    { title: `${ICONS.dot} ${TITLE_BY_SEVERITY[verdict.severity]}`, color }
  );
  builder.appendLine(`<color:"${color}">${ICONS.arrow}</color> ${verdict.advice}`);
  return builder;
}
function readInput() {
  const raw = readFileSync2(0, "utf8");
  if (!raw.trim()) return { session_id: "" };
  try {
    return JSON.parse(raw);
  } catch {
    return { session_id: "" };
  }
}
function pickMode(argv) {
  if (argv.includes("--stop")) return "stop";
  if (argv.includes("--post-tool-use")) return "post-tool-use";
  if (argv.includes("--session-compact")) return "session-compact";
  return "stop";
}
function runStop(input, throttled) {
  if (!input.session_id || !input.transcript_path) {
    Stop.emitOutput({});
    return;
  }
  let state = loadState(input.session_id);
  if (throttled) {
    const elapsed = (Date.now() - state.last_checked_at) / 1e3;
    if (elapsed < THROTTLE_SECONDS) {
      (throttled ? PostToolUse : Stop).emitOutput({});
      return;
    }
  }
  const prevOffset = state.last_offset;
  state = analyzeTranscript(input.transcript_path, state);
  const verdict = evaluate(state);
  state.last_checked_at = Date.now();
  if (state.last_offset !== prevOffset || throttled) {
    saveState(input.session_id, state);
  }
  const opts = verdict ? { toUser: renderVerdict(verdict) } : {};
  if (throttled) {
    PostToolUse.emitOutput(opts);
  } else {
    Stop.emitOutput(opts);
  }
}
function runSessionCompact(input) {
  if (!input.session_id) {
    SessionStart.emitOutput({});
    return;
  }
  const state = loadState(input.session_id);
  state.compressions += 1;
  saveState(input.session_id, state);
  SessionStart.emitOutput({});
}
runHook(() => {
  const mode = pickMode(process.argv.slice(2));
  const input = readInput();
  if (mode === "session-compact") {
    runSessionCompact(input);
  } else {
    runStop(input, mode === "post-tool-use");
  }
});
