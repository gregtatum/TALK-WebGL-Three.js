//Create a buffer of 16 bytes
var buffer = new ArrayBuffer(16);

//ArrayBuffer with a Float32 view
var floats = new Float32Array(4); //16 bytes

// [0, 0, 0, 0]

floats[1];				// 0

floats[1] = 5745.55;	//5745.55

floats[2] = "67";		//67

floats;					//[0, 5745.5498046875, 67, 0]