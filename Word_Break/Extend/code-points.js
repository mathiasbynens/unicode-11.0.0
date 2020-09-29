module.exports=JSON.parse(require('zlib').gunzipSync(Buffer.from([31,139,8,0,0,0,0,0,0,3,45,154,91,182,228,188,10,131,39,212,15,21,99,115,25,203,191,206,252,167,113,248,164,253,80,242,238,20,34,182,81,8,184,250,191,202,254,87,57,255,170,126,251,249,246,115,246,19,251,185,251,121,251,201,253,212,126,214,174,214,174,215,174,215,174,215,174,215,174,215,174,215,174,215,174,215,174,215,174,215,110,214,110,214,110,214,110,214,110,214,110,214,110,214,110,214,110,214,110,230,95,255,126,251,249,246,115,246,19,251,185,251,121,251,201,253,212,126,122,63,107,247,173,221,183,118,223,218,125,107,247,173,221,183,118,223,218,125,107,247,173,221,183,118,103,237,206,218,157,181,59,107,119,214,238,172,221,89,187,179,118,103,237,206,218,197,218,197,218,197,218,197,218,197,218,197,218,197,218,197,218,197,218,197,218,221,181,187,107,119,215,238,174,221,93,187,187,118,119,237,238,218,221,181,187,107,247,214,238,173,221,91,187,183,118,111,237,222,218,189,181,123,107,247,214,238,173,93,174,93,174,93,174,93,174,93,174,93,174,93,174,93,174,221,198,163,55,30,189,241,232,141,71,111,60,122,227,209,27,143,222,120,244,198,163,55,30,189,241,232,141,199,247,237,77,22,18,40,160,1,190,216,59,45,124,255,190,187,235,95,72,160,128,6,214,228,238,38,44,96,178,219,176,16,192,5,96,4,140,128,17,48,2,198,133,113,97,92,24,23,198,133,113,97,92,24,23,198,133,113,97,60,24,15,198,131,241,96,60,24,76,252,50,241,203,196,47,19,191,76,252,50,241,171,137,39,140,132,145,48,18,70,194,72,24,9,35,97,20,198,133,93,97,87,152,20,38,236,208,227,190,143,251,62,238,251,184,239,227,190,143,251,62,238,251,184,239,227,190,143,251,62,238,155,171,182,5,253,21,192,5,30,144,64,1,13,44,55,87,118,11,48,14,140,3,227,192,96,239,147,189,79,246,62,217,251,100,239,147,189,79,246,62,217,171,98,155,138,109,42,166,91,76,183,152,110,49,221,98,186,197,36,139,73,22,147,44,38,89,108,78,177,57,197,150,240,52,127,60,202,31,207,242,199,195,252,241,52,127,60,66,31,90,254,16,243,135,154,63,228,252,161,231,15,65,127,40,250,67,210,31,154,254,16,245,135,170,63,100,253,161,235,15,97,127,40,251,67,218,31,218,254,16,247,135,186,63,228,253,161,239,15,129,127,40,252,67,226,31,26,255,16,249,135,202,191,193,120,48,30,140,7,227,193,120,48,30,140,7,227,145,49,203,154,93,214,249,237,254,45,232,175,89,216,253,91,248,128,3,4,112,129,183,112,129,194,164,48,41,76,10,147,210,23,9,224,175,240,87,248,107,140,27,227,198,184,49,110,140,27,227,198,184,177,27,236,6,187,193,110,115,219,249,246,33,89,104,96,77,206,3,118,109,11,31,112,128,0,46,240,128,4,10,104,0,6,211,61,76,247,48,221,195,116,15,211,61,76,247,48,221,195,116,15,211,61,76,247,48,221,195,116,15,211,61,141,123,230,124,152,243,97,206,167,97,48,241,195,196,15,19,63,76,252,48,241,51,48,6,198,192,24,24,3,99,83,243,137,205,205,11,31,112,128,0,46,240,128,4,150,17,44,48,88,96,176,192,96,109,145,250,162,1,92,177,182,96,109,193,218,130,181,69,97,204,2,131,5,6,11,12,22,24,44,48,88,96,176,192,96,129,193,2,131,181,5,107,11,214,22,172,45,88,91,176,182,96,109,151,153,94,102,74,54,59,100,179,67,54,59,151,69,95,214,123,71,255,76,160,128,6,214,203,99,189,15,238,99,149,143,181,189,125,255,44,240,237,7,160,186,135,234,200,27,135,108,113,200,22,11,75,35,11,28,18,192,33,1,28,18,192,33,1,28,18,192,225,97,95,224,91,38,148,161,107,123,143,188,124,193,190,36,251,146,108,68,178,172,100,89,201,178,106,31,201,67,142,56,228,136,67,142,56,228,136,67,142,56,228,136,67,142,88,40,96,185,36,138,67,162,56,228,136,67,142,88,192,142,253,227,85,125,120,167,30,94,170,135,183,234,225,181,122,120,175,30,94,172,135,183,234,225,181,122,120,175,30,94,60,135,183,206,225,181,179,178,130,75,120,154,240,52,225,105,244,215,242,76,100,154,137,55,219,222,104,109,136,204,176,187,195,61,134,123,204,230,156,85,153,160,128,6,102,97,167,182,112,129,7,96,242,241,237,199,183,135,111,55,219,6,9,32,120,186,131,167,123,1,70,193,216,233,198,183,209,95,120,128,254,89,64,3,235,229,219,116,184,112,128,0,48,102,66,251,218,0,176,187,216,61,254,249,248,103,193,88,21,199,249,9,14,176,92,30,246,224,57,15,158,243,224,57,15,158,243,224,57,15,158,243,224,57,15,30,241,56,114,192,156,15,211,229,17,15,30,241,224,17,15,158,223,224,249,13,30,196,224,65,140,253,55,192,95,171,191,133,117,192,19,16,60,1,129,248,3,241,47,28,32,128,11,60,32,1,217,173,131,187,26,15,30,146,224,33,89,184,192,218,93,246,153,34,33,40,18,130,215,113,240,58,14,36,191,240,128,4,10,104,128,111,217,196,199,38,62,246,239,93,236,216,196,199,38,62,54,241,177,137,239,97,183,218,141,199,30,60,246,32,247,9,13,30,131,224,49,88,104,96,141,19,167,60,21,11,235,57,87,222,11,216,17,138,100,106,201,212,146,109,207,196,142,189,71,237,129,208,3,161,47,36,80,64,3,203,224,181,24,188,22,131,194,53,168,92,131,7,34,120,32,130,226,53,168,94,131,87,86,240,202,10,180,187,160,191,214,4,21,7,42,222,205,21,92,224,1,9,96,194,252,120,191,5,239,183,224,253,22,188,223,130,247,91,240,126,11,222,111,193,251,45,120,191,5,239,183,5,24,108,206,48,201,97,146,131,64,6,129,76,115,173,185,214,120,97,246,211,250,2,47,204,126,152,253,48,251,65,17,131,34,134,217,15,98,24,150,48,136,97,180,14,20,49,171,136,21,196,15,248,128,3,4,112,129,7,36,80,64,3,48,62,24,31,140,15,198,7,227,131,241,193,248,96,124,48,62,24,31,140,3,227,192,56,48,14,140,3,227,192,56,48,14,140,3,99,117,112,121,66,47,79,232,194,7,28,32,128,11,60,32,129,2,96,92,24,15,198,131,241,96,60,24,15,198,131,241,96,60,24,15,70,99,210,152,52,38,141,201,224,96,112,48,124,59,124,49,250,2,46,27,118,216,48,18,192,37,1,92,18,192,194,5,30,128,9,59,116,216,161,195,14,29,22,120,88,224,97,129,251,118,93,8,76,2,147,192,36,240,18,120,9,188,4,140,128,193,70,28,150,117,88,214,97,89,135,101,161,181,139,214,46,90,123,179,129,90,40,160,23,66,192,23,187,137,15,93,61,116,149,4,57,9,114,254,86,117,11,179,176,223,230,79,223,22,223,22,223,174,244,146,84,154,164,210,164,90,74,170,165,164,90,74,170,165,164,90,74,170,165,164,90,90,128,209,48,26,70,195,104,24,13,99,96,12,140,129,49,48,6,198,192,24,24,3,99,96,236,62,231,247,3,54,110,73,220,146,184,37,41,50,169,130,246,101,186,14,104,91,146,23,125,242,162,79,94,244,73,219,146,180,45,73,219,146,180,45,73,219,146,180,45,73,219,146,180,45,73,139,146,180,40,73,139,146,180,40,73,139,146,180,40,73,139,146,180,40,73,139,146,180,40,73,78,76,114,98,38,123,144,236,65,178,7,201,30,36,123,80,220,163,184,71,93,253,243,2,15,72,160,128,6,214,1,239,243,228,85,158,188,202,147,87,121,242,42,79,94,229,201,171,124,1,99,110,201,251,60,201,112,73,225,159,188,212,147,92,151,228,186,36,215,37,185,46,201,117,73,174,75,250,128,36,225,37,9,47,233,3,146,182,62,233,235,147,198,62,233,236,147,214,62,233,237,147,230,62,233,234,147,182,56,233,139,147,198,56,233,140,147,214,56,233,141,147,230,56,233,142,147,150,34,105,41,146,150,34,105,41,146,150,34,105,41,146,150,98,203,151,3,4,112,129,7,240,5,179,39,19,38,153,48,201,132,73,38,76,50,97,162,216,148,98,201,132,11,56,96,246,164,195,5,24,204,126,152,253,48,251,225,104,130,116,83,164,155,34,221,20,233,166,72,55,69,186,41,210,77,145,110,138,116,83,191,139,221,197,238,98,199,185,7,186,47,116,95,232,190,208,125,161,251,66,247,245,211,61,56,255,64,247,133,238,11,221,23,186,47,178,84,145,165,138,44,85,100,169,34,75,21,89,170,200,82,69,150,42,178,84,145,165,138,44,85,100,169,34,75,21,106,47,114,73,145,75,22,18,40,160,129,229,146,90,138,212,82,164,150,133,0,96,124,48,62,24,31,140,15,6,187,113,216,141,195,110,28,118,227,176,27,84,220,69,197,93,84,220,69,177,93,20,219,69,177,93,20,219,11,23,120,0,198,28,238,80,111,20,21,119,81,116,20,69,71,81,116,20,69,71,81,116,20,69,71,81,116,44,192,224,156,135,202,163,168,60,138,82,99,159,17,254,98,9,151,37,80,121,44,36,176,12,218,235,74,255,197,217,20,75,160,176,46,218,235,162,186,46,170,235,162,186,46,170,235,162,186,46,218,235,162,189,46,218,235,162,189,46,42,238,162,226,46,74,141,5,24,1,35,96,4,140,128,17,48,16,3,69,71,81,116,44,192,32,140,73,24,147,48,38,97,164,93,95,128,65,24,147,48,38,97,76,194,152,132,145,130,165,40,88,138,130,165,40,88,138,130,165,40,88,138,130,165,40,88,22,96,36,140,132,145,48,18,134,78,229,56,150,75,206,229,146,131,57,26,132,162,65,88,192,152,8,210,42,44,96,92,58,251,226,112,138,19,181,203,145,26,101,94,83,230,245,245,23,28,91,113,174,118,57,88,187,156,172,93,142,214,136,71,19,143,38,30,11,48,56,95,35,50,77,100,154,200,44,192,224,144,237,114,202,118,143,142,197,96,112,208,118,57,105,227,168,169,169,34,155,42,178,57,106,106,142,154,154,163,166,230,168,169,117,212,244,209,102,129,87,200,17,22,155,251,125,100,76,240,9,83,232,235,45,228,96,75,103,37,62,44,241,105,137,143,75,124,94,226,3,19,159,152,124,165,35,177,210,153,152,142,79,124,126,226,3,20,159,160,248,8,197,103,40,31,185,20,20,55,197,77,113,83,220,18,183,196,45,113,75,220,18,119,163,242,29,10,116,240,19,30,97,8,175,16,27,157,159,29,222,68,187,83,148,86,139,45,228,85,159,170,29,82,117,3,39,79,224,21,62,97,10,197,250,196,250,196,58,98,81,98,29,52,8,98,95,42,36,138,74,66,77,213,85,87,117,213,71,45,82,81,45,234,10,53,213,98,10,177,167,105,186,234,154,22,247,201,7,97,169,70,10,21,73,161,42,105,49,132,87,248,132,226,142,184,35,46,181,83,168,120,82,251,116,213,63,93,53,80,224,21,194,85,65,20,170,136,66,37,81,168,38,10,21,69,161,170,104,177,133,242,121,229,243,202,231,21,87,235,58,90,215,209,186,142,214,117,180,174,115,197,189,226,38,150,161,153,196,207,127,95,225,19,166,176,132,45,132,21,154,79,104,62,161,249,132,230,19,154,79,104,62,161,249,132,230,19,154,79,104,62,161,249,132,230,19,154,79,104,15,67,123,24,218,195,208,30,94,177,174,88,247,250,74,10,75,216,66,238,72,5,3,126,194,35,20,247,137,251,196,125,226,234,46,156,91,128,71,232,43,87,248,132,41,44,97,11,185,11,157,219,85,235,6,138,91,226,150,184,45,123,197,253,41,238,169,249,167,230,159,154,127,234,219,148,30,82,122,40,233,161,180,243,165,157,47,169,180,40,158,23,117,93,243,47,205,159,39,26,108,161,60,104,206,60,179,215,205,139,187,23,183,47,238,95,220,192,184,131,113,11,227,30,198,253,139,26,152,205,249,20,173,143,50,1,124,66,95,41,97,11,7,220,103,28,252,132,71,24,66,113,67,220,16,55,196,13,113,67,220,167,235,79,215,159,174,63,93,79,249,76,249,76,249,76,249,76,249,76,249,76,113,83,220,20,55,197,45,113,169,149,158,106,222,167,162,55,121,162,247,61,67,249,148,228,105,48,132,87,248,132,20,117,170,188,91,165,119,171,246,238,239,247,9,143,176,133,186,254,253,132,250,246,233,91,106,215,166,124,1,71,181,163,170,69,121,158,223,79,248,9,143,144,74,238,170,52,68,201,96,11,169,225,84,139,143,138,241,81,53,62,42,199,71,245,248,168,32,31,85,228,195,123,29,12,161,74,201,86,241,72,183,49,28,157,129,159,80,150,35,203,145,229,168,234,28,249,25,213,157,227,194,211,149,167,74,207,159,106,207,159,138,207,167,235,169,235,169,235,196,104,248,117,10,84,245,201,206,12,199,105,160,190,85,209,219,170,122,91,101,111,171,238,229,100,13,20,183,141,242,160,57,15,122,91,108,33,215,39,116,29,189,45,30,97,8,175,240,9,83,40,110,136,27,226,94,113,159,174,83,135,252,120,70,22,169,178,126,180,233,160,174,167,254,78,255,77,173,139,174,192,79,120,132,226,170,68,118,141,236,34,217,85,178,203,100,215,201,46,148,233,252,22,71,127,143,252,80,45,254,120,155,128,163,130,221,101,251,39,212,183,20,147,63,222,38,224,19,166,176,132,226,142,235,124,174,135,102,30,154,121,104,230,161,153,135,102,30,154,121,104,230,161,153,135,102,174,18,248,167,26,248,167,34,248,167,10,245,71,233,4,30,33,44,90,190,197,212,183,169,235,169,235,84,110,63,126,149,2,83,168,174,66,51,185,186,251,213,221,175,238,120,117,199,171,59,222,22,106,45,87,107,121,186,227,211,29,169,139,192,39,76,97,9,177,127,159,44,63,89,126,178,252,100,169,152,22,93,194,143,44,10,126,66,53,55,178,47,217,151,236,203,246,210,64,73,3,165,238,169,212,62,149,250,167,82,3,85,234,160,74,45,84,169,135,42,53,81,84,98,52,65,110,133,212,11,133,154,33,138,236,31,13,35,88,194,22,170,135,82,219,213,234,187,90,141,23,125,35,40,238,21,247,138,123,197,189,226,94,113,125,71,245,78,156,48,128,45,164,175,146,210,62,41,237,147,210,62,206,25,192,20,202,126,100,207,158,111,50,251,9,63,225,17,134,144,102,236,11,93,97,93,159,26,171,79,157,213,167,214,234,83,111,245,169,185,250,212,93,125,106,175,62,245,87,139,87,248,132,226,30,113,143,184,71,220,16,55,196,213,189,168,31,22,217,159,143,250,1,212,117,245,148,161,166,50,212,85,134,218,202,80,95,25,106,44,67,157,101,168,181,12,237,207,85,95,121,159,91,81,245,162,79,205,232,83,55,250,212,142,162,109,253,228,90,250,205,181,244,163,107,233,87,215,210,207,174,165,223,93,75,63,188,150,126,121,93,197,104,117,82,194,39,37,44,250,122,11,241,89,90,93,105,117,165,213,149,118,178,66,220,16,55,196,13,113,195,13,171,250,217,81,67,59,234,104,71,45,237,168,167,29,219,184,171,85,91,251,83,95,251,83,99,203,46,29,170,62,240,9,83,88,194,22,138,251,196,122,98,61,177,158,88,169,191,203,168,43,37,63,37,63,37,63,37,63,37,63,173,57,180,188,181,188,209,58,171,11,40,117,1,165,46,160,212,5,148,186,128,82,23,0,166,176,132,45,196,167,162,127,20,253,163,232,31,69,255,40,250,71,209,215,143,64,165,95,129,74,63,3,149,126,7,42,253,16,84,250,37,168,244,83,16,136,103,222,92,165,95,131,64,177,180,82,186,158,210,207,66,160,88,196,247,232,41,59,122,202,78,235,46,173,187,180,238,210,186,75,235,46,253,108,223,66,230,223,186,87,235,94,173,123,181,238,213,186,87,235,94,173,123,181,239,149,226,166,184,37,110,137,171,40,180,162,208,138,66,43,10,173,40,180,162,208,138,66,43,10,173,40,180,162,208,138,2,191,71,129,226,234,12,131,218,175,212,7,129,159,240,8,67,120,133,156,88,232,8,73,191,49,129,250,246,232,91,52,31,58,66,10,157,33,5,149,33,40,207,33,123,157,121,40,195,132,50,76,40,195,132,50,76,40,183,44,62,97,9,91,40,123,205,237,211,220,244,108,134,158,205,208,179,25,60,155,91,19,124,198,16,94,225,19,38,88,198,18,182,112,192,221,37,240,19,174,135,75,213,10,94,225,19,166,176,132,45,28,112,53,9,126,66,113,175,184,87,220,43,238,21,247,138,123,197,189,226,62,113,159,184,79,220,39,238,19,247,137,251,196,125,226,62,113,159,184,41,110,138,155,226,166,184,41,110,138,155,226,166,184,41,110,138,91,226,150,184,37,110,137,91,226,150,184,37,110,137,91,226,142,174,143,174,143,174,15,39,0,193,127,42,210,64,223,63,252,40,161,225,239,95,225,225,122,120,30,70,131,14,43,230,123,38,60,19,158,9,207,132,244,191,242,239,95,166,235,16,98,135,242,208,30,236,179,236,179,204,43,243,202,188,50,175,204,43,243,244,63,133,134,179,67,13,159,135,227,65,94,66,135,33,19,249,247,47,142,43,244,198,209,240,60,164,135,242,208,30,70,3,203,60,122,241,104,56,30,194,131,189,60,123,121,246,242,236,229,217,203,179,151,180,151,180,151,180,151,180,151,191,41,165,189,164,189,164,189,164,189,164,189,148,189,148,189,148,189,148,189,148,189,148,189,148,189,148,189,148,189,148,189,180,189,180,189,180,189,180,189,180,189,180,189,180,189,180,189,180,189,180,189,140,189,140,189,140,189,140,189,140,189,140,189,140,189,140,189,140,188,80,128,106,184,30,158,135,244,80,30,254,44,117,63,206,242,52,124,30,142,7,123,249,236,229,179,151,207,94,62,123,249,236,229,179,151,99,47,199,94,142,189,28,123,57,246,114,236,229,216,203,177,151,99,47,199,94,194,94,194,94,194,94,194,94,194,94,194,94,194,94,194,94,194,94,194,94,174,189,92,123,185,246,114,237,197,250,188,214,231,181,62,175,245,121,173,207,107,125,94,235,243,90,159,215,250,188,214,217,181,10,40,195,119,224,127,129,104,248,60,28,15,225,225,121,72,15,229,161,61,152,238,0,60,7,224,57,0,207,1,120,14,192,115,0,158,3,240,28,128,231,0,60,5,64,175,52,13,159,135,227,33,60,92,15,207,67,122,104,15,166,143,233,99,250,152,62,166,143,233,99,250,152,46,213,237,96,47,218,137,51,218,137,51,218,9,253,255,13,13,225,225,122,40,15,237,193,188,207,188,207,188,207,188,207,60,173,93,175,42,13,230,121,209,115,204,59,230,73,117,239,147,52,222,39,105,188,79,210,120,159,164,241,62,73,227,41,25,51,136,112,222,223,16,30,174,135,231,33,61,148,7,156,213,104,39,106,180,19,53,218,137,154,249,251,110,95,37,28,47,167,135,242,208,30,252,29,239,70,134,207,195,241,16,30,174,135,231,193,94,174,189,92,123,185,246,242,236,229,217,203,179,151,103,47,207,94,158,189,60,123,121,246,242,236,229,217,75,218,75,218,75,218,75,218,75,218,75,218,75,218,75,218,75,218,75,218,75,217,75,217,75,217,75,217,75,217,75,217,75,217,75,217,75,217,75,217,75,219,75,219,75,219,75,219,75,219,75,219,75,219,75,219,75,219,75,219,203,216,203,216,203,216,203,216,203,216,203,216,203,216,203,216,203,216,139,227,151,191,159,135,207,195,241,16,30,174,135,231,33,61,148,135,246,96,47,159,189,124,246,242,217,203,103,47,159,189,124,246,242,217,203,103,47,159,189,124,246,114,236,229,216,203,177,151,99,47,199,94,142,189,28,123,57,246,114,236,229,216,75,216,75,200,75,57,238,149,127,255,58,30,194,195,245,240,60,164,135,242,208,30,228,179,28,247,114,220,203,113,47,199,189,28,247,114,220,203,113,47,199,189,28,247,114,220,203,113,47,199,189,28,247,114,220,203,113,47,199,189,28,247,114,220,203,113,47,199,189,28,247,114,220,203,113,47,199,189,28,247,114,220,203,113,47,199,189,28,247,114,220,219,113,111,199,189,29,247,118,220,219,113,111,199,189,29,247,118,220,219,113,111,199,189,29,247,118,220,219,113,111,199,189,29,247,118,220,219,113,111,199,189,29,247,118,220,219,113,111,199,189,29,247,118,220,219,113,111,199,189,29,247,118,220,219,113,111,199,189,29,247,118,220,57,121,209,96,47,97,47,97,47,206,89,237,156,213,206,89,237,156,213,206,89,237,156,213,206,89,237,156,213,206,89,237,156,213,206,89,237,156,213,206,89,237,156,213,206,89,237,156,213,206,89,237,156,213,206,89,237,156,213,206,89,237,156,213,206,89,237,156,213,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,59,214,238,88,187,99,237,142,181,59,214,238,88,187,99,237,142,181,59,214,238,88,187,99,237,142,181,59,214,238,88,187,99,237,142,181,59,214,238,88,187,99,237,142,181,59,214,238,88,187,99,237,142,181,59,214,238,88,187,99,237,142,181,59,214,238,88,187,99,237,142,181,59,214,238,88,187,99,237,142,181,59,214,238,88,187,99,237,142,181,59,214,238,88,187,99,237,142,181,59,214,238,88,187,99,237,142,181,59,214,238,88,187,99,237,142,181,59,214,238,88,187,99,237,142,181,59,214,238,88,187,99,237,142,181,59,214,238,88,187,99,237,142,181,59,214,238,88,187,99,237,142,181,59,214,238,88,187,99,237,142,181,59,214,238,88,187,99,237,142,181,59,214,238,88,187,99,237,142,181,59,214,238,88,187,99,237,142,181,59,214,238,88,187,99,237,142,181,59,214,238,88,187,99,237,142,181,59,214,238,88,187,99,237,142,181,59,214,238,88,187,99,237,110,189,244,191,255,3,206,14,112,88,84,52,0,0])))