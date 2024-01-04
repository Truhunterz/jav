function myFunction() 
        {
            var txt;
            if(confirm("Press a button!")==true){
                txt = "You pressed OK!";
            }else{
                txt = "You pressed Cancel!";
            }
            document.getElementById("demo").innerHTML = txt;
        }

        function checkDob(nric){
                //let nric = document.getElementById("nric").value;

                // 020203014131

                const birthYear = nric.substr(0, 2);
                const birthMonth = nric.substr(2, 2);
                const birthDay = nric.substr(4, 2);
                
                const firstDigit = parseInt(nric.charAt(0));
                let fullyear;

                if (firstDigit == 0){
                    fullyear = "20";
                }else{
                    fullyear = "19";
                }
                let fullbirthYear = fullyear + birthYear;
                console.log(fullbirthYear);

                // Combine the century, year, month, and day to form the date of birth const dob new Date($(birthYear), birthlonth 1, birthDay);
                const dob = new Date(`${fullbirthYear}`, birthMonth - 1, birthDay);
                
                document.getElementById("outputTarikhLahir").innerHTML = dob.toDateString();
            
                let currentDate = new Date();
                let umur = currentDate.getFullYear() - fullbirthYear;
                document.getElementById("umur").value = umur;
            }



            function checkStr() {
            let string = "POLITEKNIK SEBERANG PERAI";
            let p = string.substring(0,1);
            let s = string.substring(11,1);
            let p2 = string.substring(20,21);

            console.log(p + s + p2);
            
            }


            function checkGender(nric) {
            //let nric = document.getElementById("nric").value;
            const checkNRIC = parseInt(nric.charAt(11));
            const checkNRIC2 = nric.substr(11,1);

            if (checkNRIC % 2 === 0){
                jantina = 'Perempuan';
            }else {
                jantina = 'Lelaki';
            }

            autoSelectGender (jantina);

        }

function autoSelectGender(gender) {
        
        const lelakiRB = document.getElementById('Lelaki');
        const perempuanRB = document.getElementById('Perempuan');

       
        if (gender === 'Lelaki') {
            lelakiRB.checked = true;
        } else if (gender === 'Perempuan') {
            perempuanRB.checked = true;
        }
        
    }

    function generatepersonalInfo(){
        let nric = document.getElementById("nric").value;

        if (nric.length <= 0) {
            //alert("Please enter your IC number");
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please enter your IC number'
              })
            return false;
        }

        if(nric.length != 12) {
           //alert("Please enter 12 digit only, without dash (-) or space");
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please enter 12 digit only, without dash (-) or space'
              })
            return false;
        }

        checkDob(nric);
        checkGender(nric);
    }

    function validate_nric() {
        let nric = document.getElementById("nric").value;
        const regex = /^\d{12}$/;
        let nric_msg;

        if(regex.test(nric.trim())) {
            nric_msg = "";
            checkDob(nric);
            checkGender(nric);
        } else {
            nric_msg = "<span style ='color:red'>Please enter 12 digit of NRIC number without dash (-)"
        }

        document.getElementById("msgnric").innerHTML = nric_msg;
        
    }

    