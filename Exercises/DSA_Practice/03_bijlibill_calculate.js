
/*
    0 to 100 unit = Rs. 4.2/unit
    101 to 200 unit = Rs. 6/unit
    201 to 400 unit = Rs. 8/unit
    more then 400 unit = Rs. 13/unit
*/


const calculateBijliBill = (unitInput) => {
    
    let bijliBill = 0;

    if (unitInput > 400) {
        unitInput = unitInput - 400;
        bijliBill += (unitInput * 13);
        unitInput = 400;
    }

    if (unitInput >= 200) {
        unitInput = unitInput - 200;
        bijliBill += (unitInput * 8);
        unitInput = 200;
    }

    if (unitInput >= 100) {
        unitInput = unitInput - 100;
        bijliBill += (unitInput * 6);
        unitInput = 100;
    }

    bijliBill += unitInput * 4.2;

    console.log(bijliBill);

}

calculateBijliBill(100);

