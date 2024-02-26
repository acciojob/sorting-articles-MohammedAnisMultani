 let bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];


            function removeHmm(str){
                // let newStr = str.replace(/^(The|the|a|A|An|an)\s+/g,"").trim();

                let arr = ["the","The","a","A","an","An"]
                for(let t of arr){
                    str = str.replaceAll(t+" ","").trim()
                }
                return str.trim();
            }

        bands.sort((a,b)=>{
            const nameA = removeHmm(a).toLowerCase();
            const nameB = removeHmm(b).toLowerCase();
            if(nameA>nameB){
                return 1
            }
            else if(nameA<nameB){
                return -1;
            }
            else{
                return 0;
            }

        })
        // console.log(bands)

         let bandList = document.querySelector('#bands')
    bands.forEach((value)=>{
            let listItems = document.createElement('li')
            listItems.innerHTML = `${value}`
            bandList.append(listItems)
        })
