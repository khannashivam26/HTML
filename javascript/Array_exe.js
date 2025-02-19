const character=[
    {
        name:'shivam',
        height:'175',
        mass:'75',
        eye_color:'brown',
        gender:'male'
    },
     {
        name:'bhavya',
        height:'165',
        mass:'82',
        eye_color:'brown',
        gender:'female'
    },
     {
        name:'poorna',
        height:'168',
        mass:'80',
        eye_color:'black',
        gender:'female'
    },
     {
        name:'piyush',
        height:'180',
        mass:'68',
        eye_color:'black',
        gender:'male'
    },
     {
        name:'pranjal',
        height:'182',
        mass:'86',
        eye_color:'black',
        gender:'male'
    }
    ]
    //get an array of all names
    const charc=character.map((element) => {return element.name})
    console.log(charc)
    // get an aaray of objects with name and height
    const charc1=character.map((element) => { return {name:element.name,height:element.height
    }});
    console.log(charc1)
    
    
