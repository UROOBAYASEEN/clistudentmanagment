import inquirer  from "inquirer";
import chalk from "chalk";
let adminpin:Number=12345;
let webdev=10000
let blockchin=15000
let metaverse=20000
let artificailintilli=25000
let fee=0
let fees=false
let studetname:string[]=[]
let studentobject:any[]=[]

 
let starting=async()=>{
    let rollnumber:number= Math.floor(9000+Math.random()*1000) 

    let  start=await inquirer.prompt([{
        message:chalk.green('WHO ARE YOU'),
        name:"name",
        type:'list',
        choices:['admin','teacher','student']
    }])
    if(start.name=='student'){
        let student=await inquirer.prompt([{
            message:'PLEASE SELECT ANY ONE OPERATOR FOR FURTHER PROCESS',
            name:"name",
            type:"list",
            choices:["ADD NEW STUDENT IN CLASS","view student status",'CHECK FEEE STRUCTURE','QUIT']
        }])
        if(student.name=='ADD NEW STUDENT IN CLASS'){
            for(let i=0;i<1;i++){

            
            let information=await inquirer.prompt([{
                message:'what is your name',
                type:'input',
                name:'name'

            },
            {
            message:"please enter your age",
            type:'input',
            name:'age'
            },
            {
                message:"which course you want to study",
                type:'list',
                name:'course',
                choices:["web developmet",'block chain','artififical antilligancy','meta verse']
            },{

                message:'your gender',
                type:"list",
                name:"gender",
                choices:['male','female']
            },{
                message:'do you want to fee pay',
                type:"list",
                name:'pay',
                choices:['yes','no']

            },{
                message:"YOU NATIONALITY",
                type:'input',
                name:'nation'
            },{
                message:"how many fee you pay",
                type:'number',
                name:'fee'
            }

        ])
        if(information.pay=='yes'){
            fees=true
        }
        if(information.course=="web developmet"){
            fee=webdev
        }
       else if(information.course=='block chain'){
        fee=blockchin
       }
        else if(information.course=='artififical antilligancy'){
            fee=artificailintilli
        }
         else if(information.course=='meta verse'){
            fee=metaverse
         }
         
         let remainingamount=fee-information.fee


         let person={
            NAME:information.name,
            ROLLNUMBER:rollnumber,
            AGE:information.age,
            COURSE:fee,
            ISFEEPAY:fees,
            NATIONALITY:information.nation,
            PayingAmount:information.fee,
            RemeningFEE:remainingamount,
            isPresent:false

        
         }
         studetname.push(information.name)
         studentobject.push(person)

         console.log(chalk.yellow.bold('student add sucessfully in class'))
           // console.log(person)
         await starting()

        } //loop end
        }
        else if(student.name=="view student status"){
            let check=await inquirer.prompt([{
                message:'select any one of the following',
                name:'select',
                type:"list",
                choices:['check whole student of class','check one student in class',"EXIT"]
            }])
            if(check.select=='check whole student of class'){
                if(studentobject.length<=0){
                    console.log(chalk.red.bold('no student found in class'))
                    await starting()
                }
                else{
                console.log(studentobject)
                await starting()
                }
            }
            else if(check.select=='check one student in class'){
                let  stoname=await inquirer.prompt([{
                    message:'please enter student name which you want the data',
                    type:'input',
                    name:'index'
                }])
                let num=studetname.indexOf(stoname.index)
                let data=studentobject[num]
                console.log(data)

                await starting()
            }
            else if(check.select=='EXIT'){
                console.log('GOOD BYE CLASSS ')

            
            
            }


        }  //view condi end
        else if(student.name=='QUIT'){
            console.log('GOOD BYE')
        }
        else if(student.name=='CHECK FEEE STRUCTURE'){
            let object={

                ARTIFICALINTELIGENCYFEE:artificailintilli,
                BLOCKCHAIN:blockchin,
                METAVERSE:metaverse,
                WEBDELEVELOPMET:webdev,
            }
            console.log(object)
            
            await starting()
            



        }
        
        
    } // STUDENT CLOSE 
    else if(start.name=='teacher'){
        let attendence=await inquirer.prompt([{
            message:'KINDLY ENTER THE NAME OF STUDENT FOR ATTENDECE',
            name:"enter",
            type:"input"
        }])
        if(studetname.includes(attendence.enter)){
            let stindx=studetname.indexOf(attendence.enter)
            studentobject[stindx].isPresent=true
            console.log(chalk.green.italic(`${attendence.enter}  you are present in class enjoy class`))
            await starting()


        }
        else{
            console.log(chalk.red.bold('you are not in class kindly take admishion in class first then take class'))
            await starting()
        }



    }
   
    
    else if(start.name=='admin'){
        let pincode=await inquirer.prompt([{
            message:'please enter pincode',
            name:'pin',
            type:'number'
        }])
        if(pincode.pin==adminpin){
            console.log('CONGRALATION YOU ENTER RIGHT PIN CODE')
            let remove=await inquirer.prompt([{
                message:'PLEASE ENTER THE NAME OF STUDENT YOU WANT TO REMOVE FROM CLASS',
                type:'input',
                name:'remove'
            }])
          let index=  studetname.indexOf(remove.remove)
          if(remove.remove==''){
            console.log(chalk.red.bold('NO STUDENT REMOVE FROM CLASS'))
            await starting()

          }
          else{
          studentobject.splice(index,1)
          console.log(chalk.yellow.bold('STUDENT REMOVE SUCESSFULLY'))
          await starting()
          }
        }
        else{
            console.log('YOU  ENTER WRONG PIN CODE')
            await starting()
        }

    } // admin close


} // FUNCTION CLOSEm
 await starting()