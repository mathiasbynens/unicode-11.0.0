module.exports=JSON.parse(require('zlib').gunzipSync(Buffer.from([31,139,8,0,0,0,0,0,0,3,93,154,73,150,221,56,182,4,247,146,227,26,4,64,18,205,16,237,38,42,255,50,254,254,235,73,1,163,100,49,201,227,30,143,36,220,46,26,2,84,254,247,159,127,255,255,235,250,250,250,231,63,223,34,32,34,226,66,220,136,7,145,16,25,81,16,21,209,16,29,49,16,19,177,16,251,136,64,158,64,158,64,158,64,158,64,158,64,158,64,158,64,158,64,158,64,158,64,158,64,158,64,158,64,158,64,158,64,158,72,158,72,158,72,158,72,158,72,158,72,158,72,158,72,158,72,158,72,158,72,158,72,158,72,158,72,158,72,158,72,158,139,60,23,121,46,242,92,228,185,200,115,145,231,34,207,69,158,139,60,23,121,46,242,92,228,185,200,115,145,231,34,207,69,158,155,60,55,121,110,242,220,228,185,201,115,147,231,38,207,77,158,155,60,55,121,110,242,220,228,185,201,115,147,231,38,207,77,158,135,60,15,121,30,242,60,228,121,200,243,144,231,33,207,67,158,135,60,15,121,30,242,60,228,121,200,243,144,231,33,207,67,158,68,158,68,158,68,158,68,158,68,158,68,158,68,158,68,158,68,158,68,158,68,158,68,158,68,158,68,158,68,158,116,242,220,229,66,220,136,7,145,16,25,81,16,167,209,167,6,68,68,92,136,27,241,32,18,34,35,10,226,125,96,67,116,196,64,76,196,66,28,138,167,125,33,200,211,200,211,200,211,200,211,200,211,200,211,200,211,200,211,200,211,200,211,200,211,200,211,200,211,200,211,200,211,201,211,201,211,201,211,201,211,201,211,201,211,201,211,201,211,201,211,201,211,201,211,201,211,201,211,201,211,137,49,104,125,208,250,160,209,65,163,227,180,149,88,105,19,43,109,98,165,77,172,180,137,149,54,177,210,38,86,218,20,222,231,20,68,69,156,204,137,153,155,152,185,137,153,155,152,185,137,153,155,152,185,137,153,155,152,185,137,153,155,152,185,137,153,155,152,185,137,153,155,152,185,137,153,155,152,185,137,153,155,152,185,137,153,155,152,185,137,153,155,50,121,38,77,76,154,152,52,49,105,98,210,196,164,137,73,19,147,7,46,30,184,0,92,0,46,0,23,128,139,182,22,109,45,154,88,52,177,104,98,29,138,76,87,102,94,19,249,122,255,18,17,23,226,70,60,136,132,200,136,130,168,136,134,232,136,129,32,6,175,137,204,107,34,243,154,200,188,38,50,175,137,204,107,34,243,154,200,188,38,50,175,137,204,107,34,243,154,200,188,38,50,175,137,204,236,206,204,238,204,236,206,204,238,220,222,139,9,207,236,206,204,238,204,236,206,204,238,204,236,206,84,62,83,249,252,86,126,113,215,226,174,205,93,27,228,13,242,6,121,159,219,11,211,170,48,173,10,211,170,48,173,10,251,150,194,190,165,132,247,246,133,56,173,23,246,45,133,125,75,97,223,82,216,183,20,182,43,133,237,74,97,187,82,216,165,20,118,41,133,93,74,97,151,82,216,165,20,38,90,97,162,21,38,90,153,180,53,111,4,141,50,173,10,211,170,48,173,10,211,170,48,173,202,124,31,72,235,147,214,39,236,76,180,194,68,43,76,180,194,252,42,204,175,178,136,177,136,193,140,43,204,184,178,136,193,212,43,12,128,194,0,40,12,128,194,0,40,12,128,194,0,40,12,128,194,0,40,12,128,178,201,179,201,179,201,179,201,179,201,179,201,179,201,179,201,179,201,243,142,168,77,158,125,242,84,182,250,149,173,126,101,171,95,153,212,149,185,92,153,167,149,121,90,153,167,149,121,90,153,167,149,121,90,153,167,149,121,90,89,240,43,171,122,101,85,175,172,234,149,85,189,178,170,87,86,245,202,170,94,217,53,85,118,77,181,240,64,94,136,149,215,95,229,245,87,7,23,243,30,172,131,60,172,189,149,177,81,169,88,163,62,141,250,52,202,210,40,75,163,44,13,228,6,114,227,173,215,238,247,174,211,104,163,8,141,151,75,203,239,95,14,123,131,171,21,154,0,176,1,216,0,108,0,54,0,27,47,250,198,139,190,13,130,193,222,96,111,176,55,70,84,99,68,53,70,84,99,68,181,183,62,140,168,78,161,58,245,233,44,248,157,66,117,10,213,25,63,157,241,211,41,75,167,187,59,189,220,233,229,78,17,250,248,66,156,187,6,227,121,112,62,29,188,119,6,49,6,239,157,193,16,29,244,215,160,191,6,111,144,65,199,13,58,110,144,112,48,50,7,81,7,81,7,81,7,29,55,232,175,49,94,193,115,168,252,160,242,19,138,73,49,39,47,214,73,85,39,197,156,20,115,82,204,73,49,39,81,39,193,38,193,230,56,128,115,242,19,203,242,100,89,158,172,198,139,13,195,98,123,176,216,30,172,235,189,38,35,10,162,34,78,91,139,58,47,234,188,120,101,175,251,189,166,35,6,98,34,78,87,46,118,212,139,253,243,98,255,188,216,63,47,246,207,139,253,243,98,255,188,216,54,47,58,101,49,29,214,224,26,234,179,6,23,143,247,226,147,103,243,58,222,188,142,55,101,217,84,99,83,132,205,164,222,57,34,46,196,141,224,246,156,16,60,39,211,86,126,31,216,16,29,49,16,36,204,167,98,187,124,33,136,193,36,218,156,254,54,167,191,205,161,111,115,232,219,133,7,150,247,129,103,54,237,202,147,57,6,110,142,129,155,99,224,230,24,184,57,6,110,142,129,155,99,224,230,244,183,57,253,109,78,127,155,211,223,230,244,183,57,253,109,78,127,155,211,223,230,244,183,57,253,109,78,127,155,211,223,230,244,183,217,31,110,246,135,155,253,225,102,127,184,217,31,110,246,135,155,253,225,102,127,184,217,31,110,246,135,155,253,225,102,172,110,78,127,155,211,223,102,244,110,70,239,102,244,110,70,239,102,244,110,70,239,230,244,183,25,198,155,97,188,199,247,237,225,235,108,195,62,98,33,246,17,231,20,240,17,17,113,33,110,196,131,224,129,103,60,127,68,69,52,4,109,93,180,117,78,91,31,193,197,207,251,19,49,18,49,206,188,248,8,242,100,242,100,242,20,126,42,4,43,4,43,180,126,198,70,224,195,75,224,195,75,224,195,75,200,231,48,251,17,23,226,52,193,81,40,112,20,10,28,133,66,126,248,233,225,39,162,102,162,230,206,197,167,43,63,34,35,10,162,34,26,162,35,6,226,132,207,116,101,30,220,53,184,107,112,215,224,174,241,222,181,16,32,207,47,68,64,16,126,18,254,108,155,67,57,95,101,63,98,32,248,137,202,23,42,95,206,4,9,245,28,43,62,34,32,34,34,35,78,17,42,117,174,12,36,246,153,31,113,90,111,231,188,243,17,5,193,79,231,85,251,17,252,196,24,107,231,160,241,17,239,197,3,49,17,167,62,141,225,215,206,155,241,35,30,4,77,36,98,36,218,74,180,149,104,43,209,86,162,45,134,68,99,244,178,139,251,8,158,156,121,114,230,201,153,39,103,158,156,121,114,126,159,124,250,180,117,194,159,181,229,35,160,232,180,206,128,108,12,200,214,105,157,145,217,24,153,141,145,217,24,153,141,145,201,62,243,35,168,97,63,53,236,103,151,18,216,242,125,68,68,156,24,157,73,212,89,73,58,43,73,63,251,132,143,168,136,134,56,141,178,81,12,157,58,119,234,220,207,247,204,143,32,207,249,158,25,122,38,24,107,75,103,194,118,122,167,23,174,41,92,211,184,166,113,77,35,252,121,95,124,4,153,25,252,189,17,172,17,172,17,108,129,188,184,107,113,215,122,175,33,243,38,207,57,24,134,113,206,212,31,49,17,11,113,238,26,44,230,227,226,46,230,215,96,29,27,84,126,80,249,193,154,48,88,19,6,107,194,56,123,191,143,120,16,220,62,223,219,11,162,34,26,162,35,8,207,218,50,38,225,39,225,23,49,22,173,47,50,47,98,44,98,80,204,177,136,65,85,7,197,28,155,187,54,63,157,211,113,152,231,164,240,17,1,17,17,23,226,70,60,136,132,200,136,130,120,159,220,16,29,49,16,19,177,16,135,125,210,5,147,46,96,31,30,216,135,7,246,225,31,65,30,250,98,210,23,147,190,152,244,197,164,47,38,125,49,233,139,73,95,76,250,98,210,23,147,190,152,139,60,116,202,164,83,38,157,50,233,148,73,167,76,58,101,210,41,147,161,62,23,121,22,121,22,121,232,184,185,200,195,116,152,76,135,201,116,152,155,60,155,60,116,247,220,228,217,228,217,228,97,36,204,119,36,108,98,108,98,108,98,108,98,156,195,108,252,58,221,244,17,1,17,17,23,226,70,60,136,132,200,136,130,168,136,134,232,136,129,152,136,133,32,207,34,207,34,207,34,207,34,207,34,207,34,207,34,207,34,207,34,207,34,207,34,207,34,207,34,207,34,207,34,207,34,207,233,166,56,248,203,120,255,114,58,46,206,243,218,138,140,177,200,24,139,140,177,200,24,139,140,177,200,24,139,140,177,200,24,139,140,177,200,24,139,140,177,200,24,139,140,177,200,24,139,140,177,200,24,139,140,177,56,223,168,155,60,155,60,155,60,155,60,155,60,155,60,155,60,155,60,155,60,155,60,155,60,155,60,155,60,103,176,93,95,231,179,234,71,116,196,64,204,35,206,41,233,35,190,47,254,236,86,246,17,231,173,247,17,1,17,17,55,226,65,36,68,70,20,68,69,208,196,217,138,124,196,64,204,35,206,65,236,35,136,177,137,113,170,218,202,217,21,124,68,66,156,7,242,181,185,241,181,185,149,179,8,127,4,63,157,97,211,248,114,251,17,60,240,12,155,198,39,220,198,39,220,198,39,220,198,39,220,198,39,220,198,39,220,198,39,220,198,39,220,198,39,220,198,39,220,198,39,220,198,39,220,198,39,220,86,94,192,211,131,173,66,193,190,183,177,239,253,136,138,104,136,142,24,136,211,40,159,76,27,159,76,63,130,219,111,110,191,185,253,230,246,251,189,125,33,8,118,254,29,173,241,197,181,213,194,95,202,251,151,83,213,122,246,144,31,1,78,39,79,39,79,39,79,167,117,42,223,32,109,144,54,72,27,164,13,210,118,182,52,173,157,13,204,71,68,4,15,60,27,152,214,206,7,174,198,71,212,198,222,184,177,37,110,236,132,27,59,225,198,78,184,177,239,109,236,123,27,91,217,143,56,133,226,107,106,107,140,132,198,72,104,103,226,127,110,122,16,5,241,125,205,231,172,255,253,192,189,206,222,248,35,2,34,34,46,196,141,120,16,9,145,17,5,81,17,13,209,17,3,49,17,111,140,125,68,36,79,36,79,36,79,36,79,36,79,36,79,36,79,36,79,36,79,36,79,36,79,36,79,36,79,36,79,36,207,217,184,206,242,245,245,249,47,139,225,177,235,204,244,99,249,8,246,218,108,91,108,171,109,195,198,95,79,62,189,240,218,104,123,217,62,182,201,118,216,78,219,101,187,101,175,98,91,109,157,249,242,189,203,169,214,155,234,250,85,201,211,119,175,125,108,127,92,156,255,182,251,78,182,63,126,45,182,213,182,217,118,219,97,59,109,151,237,150,125,222,193,112,127,254,59,254,244,224,111,251,167,146,223,182,218,54,219,110,59,108,167,237,178,221,178,183,83,221,78,117,71,219,203,246,182,125,108,147,108,118,187,197,237,22,183,219,221,80,119,67,221,13,117,55,212,93,186,174,210,241,47,17,175,13,182,226,253,107,92,125,219,98,91,109,221,80,236,182,211,118,217,170,56,243,114,200,203,33,47,135,188,46,91,213,106,102,255,234,178,79,151,125,186,146,179,27,191,27,223,117,158,63,234,220,141,223,135,173,171,209,93,141,225,39,15,63,121,248,201,67,79,94,174,228,114,37,151,43,185,92,43,254,233,231,181,217,86,33,215,116,67,235,178,245,147,215,99,235,134,150,27,90,197,182,218,170,26,219,227,121,123,60,111,47,20,219,11,197,246,220,223,41,217,102,219,98,91,109,157,42,185,221,228,118,179,219,205,206,156,163,237,101,251,22,246,249,87,203,230,183,173,182,205,182,219,14,219,105,187,108,183,236,159,133,241,219,94,182,14,249,103,37,252,109,31,63,185,251,222,238,123,255,172,117,223,214,143,250,51,67,191,173,171,209,141,223,141,48,190,108,77,52,148,106,246,104,251,227,215,219,246,177,29,182,211,86,169,166,83,241,169,231,181,186,119,93,151,237,109,251,216,38,219,108,91,108,171,109,179,253,17,67,8,235,22,194,106,221,214,247,118,95,220,131,109,180,53,175,203,190,92,246,229,177,177,195,180,93,182,66,216,49,218,94,182,183,237,99,235,118,99,177,173,182,205,246,173,85,250,53,8,255,44,230,191,237,159,197,252,219,6,219,104,123,217,222,182,143,109,178,205,182,213,182,253,109,255,218,138,127,219,104,123,217,222,182,143,109,178,173,182,110,215,128,203,128,203,128,203,128,203,128,127,13,254,111,219,109,135,237,180,93,178,183,159,252,184,56,143,139,243,24,225,49,194,99,132,199,8,143,139,243,184,56,143,17,138,127,45,63,126,53,96,49,96,49,96,209,152,92,245,203,214,188,213,188,213,188,213,188,213,188,213,188,213,125,84,95,252,236,169,145,61,53,178,167,70,246,212,200,158,26,217,83,35,123,106,124,219,98,251,35,70,179,237,182,195,118,202,86,135,172,14,89,29,178,58,100,117,200,154,109,157,249,71,233,170,51,87,103,174,206,92,127,100,94,182,91,182,185,83,154,59,165,153,183,153,183,153,183,153,183,153,183,153,183,153,168,153,168,153,168,153,168,153,168,153,168,155,168,27,161,27,161,59,115,87,230,233,33,58,61,68,167,135,232,244,16,157,30,162,243,250,241,228,102,59,108,167,173,0,231,253,101,235,144,183,67,222,14,121,59,228,237,144,183,250,104,86,55,84,221,144,135,247,244,120,94,251,178,165,221,208,126,219,47,219,96,27,109,47,91,61,106,95,95,182,193,54,218,94,182,63,30,245,216,210,101,161,255,178,239,162,250,109,223,226,28,27,108,105,55,110,77,201,99,25,192,215,239,227,225,123,138,57,182,216,86,217,220,109,135,237,180,117,67,239,247,141,203,7,237,203,7,237,99,163,237,99,155,108,141,80,140,80,140,240,190,233,142,53,81,243,175,237,199,175,230,109,226,93,119,180,189,108,233,238,235,123,175,242,101,27,108,163,237,101,251,227,81,143,109,178,205,182,197,182,218,54,219,110,59,108,167,237,178,221,178,193,188,193,188,193,188,193,188,193,188,193,188,193,188,193,188,193,188,193,188,193,188,193,188,193,188,193,188,193,188,193,188,209,188,209,188,209,188,209,188,209,188,209,188,209,188,209,188,209,188,209,188,209,188,209,188,209,188,209,188,209,188,209,188,151,121,47,243,94,230,189,204,123,153,247,50,239,101,222,203,153,47,103,190,156,249,114,230,203,153,111,103,190,157,249,118,230,219,153,127,76,231,219,153,111,103,190,221,71,183,251,232,118,31,221,238,163,219,188,183,121,111,243,222,230,189,205,251,152,247,49,239,99,222,199,188,143,121,31,243,62,230,125,204,251,152,247,49,239,99,222,199,188,143,121,31,243,62,230,125,204,155,204,155,204,155,204,155,204,155,204,155,204,155,204,155,204,155,204,155,204,155,204,155,204,155,204,155,221,110,113,170,234,123,171,239,173,174,85,117,173,170,107,213,92,156,230,226,52,23,167,57,70,115,200,230,226,52,23,167,185,56,205,197,105,46,78,51,96,51,96,51,96,51,224,187,51,191,202,191,191,254,57,233,203,54,216,70,219,203,246,182,125,108,147,109,177,173,182,205,182,219,14,219,105,187,108,13,24,12,24,12,24,12,24,12,24,12,24,12,24,12,248,231,13,251,109,205,27,76,20,76,20,76,20,76,20,76,20,77,20,77,20,141,16,141,16,157,57,58,115,116,230,232,62,250,243,150,252,181,21,231,127,158,124,109,176,141,182,151,237,109,251,216,166,191,237,159,243,209,177,143,237,143,139,179,109,177,173,182,135,168,223,191,255,21,158,185,128,13,182,209,246,178,189,109,31,219,100,155,109,139,109,181,253,17,178,219,14,219,105,187,108,183,108,48,111,48,111,48,111,48,111,48,111,48,111,48,111,48,111,48,111,48,111,48,111,48,111,48,111,48,111,48,111,48,111,52,111,52,111,52,111,52,111,52,111,52,111,52,111,52,111,52,111,52,111,52,111,52,111,52,111,52,111,52,111,52,239,101,222,203,188,151,121,47,243,94,230,189,204,123,153,247,50,239,101,222,203,188,151,121,47,243,94,230,189,204,123,153,247,50,239,109,222,219,188,183,121,111,243,222,230,189,205,123,155,247,54,239,109,222,219,188,63,22,153,219,188,183,121,111,243,222,230,189,205,251,152,247,49,239,99,222,199,188,143,121,31,243,62,230,125,204,251,152,247,49,239,99,222,199,188,143,121,31,243,62,230,125,204,155,204,155,204,155,204,155,204,155,204,155,204,155,204,155,204,155,204,155,204,155,204,155,204,155,204,155,204,155,204,155,204,155,205,155,205,155,205,155,205,155,205,155,205,155,205,155,205,155,205,155,205,155,205,155,205,155,205,155,205,155,205,155,205,91,204,91,204,91,204,91,204,91,204,91,204,91,204,91,204,91,204,91,204,91,204,91,204,91,204,91,204,91,204,91,204,91,205,91,205,91,205,91,205,91,205,91,205,91,205,91,205,91,205,91,205,91,205,91,205,91,205,91,205,91,205,91,205,219,204,219,204,219,204,219,204,219,204,219,204,219,204,219,204,219,204,219,204,219,204,219,204,219,204,219,204,219,204,219,204,219,205,219,205,219,205,219,205,219,205,219,205,219,205,219,205,219,205,219,205,219,205,219,205,219,205,219,205,219,205,219,205,59,204,59,204,59,204,59,204,59,204,59,204,59,204,59,204,59,204,59,204,59,204,59,204,59,204,59,204,59,204,59,204,59,205,59,205,59,205,59,205,59,205,59,205,59,205,59,205,59,205,59,205,59,205,59,205,59,205,59,205,59,205,59,205,187,204,187,204,187,204,187,204,187,204,187,204,187,204,187,204,187,204,187,204,187,204,187,204,187,204,187,204,187,204,187,246,63,255,247,63,114,188,142,246,250,81,0,0])))