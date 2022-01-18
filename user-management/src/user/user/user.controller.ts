import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { user } from 'src/entities/user.enity';
import { Post, Put, Patch, Delete, Body, Param } from '@nestjs/common';
import e from 'express';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    // imported the @Get decorator from the @nestjs/common package and use it to decorate the index() method 
    // to create a route that will be available from the /user path which will return us User Deatails from database
    @Get()
    index(): Promise<user[]> {
        return this.userService.findAll();
    }

    // imported @Post() decorator to create an endpoint that accepts POST requests. we add the create path 
    // to the @Post decorator our endpoint will be /user/create.
    // Here we first fetch details from database and use Array.map method to get only user email to which we use Array.includes to check
    // if email is allready present  it return an error else adding user to database, making all email unique

    @Post('create')
    async create(@Body() userData: user): Promise<any> {
        const data = await this.userService.findAll()
        const email = data.map((item) => {
            return (
                item.email
            )
        })
        var ans = email.includes(userData.email)
        if (ans === true) {
            return "no"
        } else {
            return this.userService.create(userData);
        }

    }


    // imported @Patch() decorator to create an endpoint that accepts Patch requests. we add the create path 
    // to the @Patch decorator our endpoint will be /user/update.
    // Here we first fetch details from database and use Array.map method to get only user email to which we use Array.filter to 
    //  remove the useremail and then update user, it return an error if new email added is allready present
    // else its updates the user, making all email unique.4

    @Patch('update/:id')
    async update(@Param('id') id, @Body() userData: user): Promise<any> {
        console.log(userData.email)
        const data = await this.userService.findAll()
        const email = data.map((item) => {
            return (
                item.email
            )
        })
        const fil = email.filter(item=>{
            return(
                item == userData.email
            )
        })
        if(fil.length >1){
            return "no"
        }else{
            userData.id = Number(id);
        return this.userService.update(userData);
        }
        
    


    }

    // imported the @Delete decorator from the @nestjs/common package and use it to decorate the index() method 
    // to create a route that will be available from the /user/delete path which deletes the user with 
    // matching user_id that we get from paarns

    @Delete('delete/:id')
    async delete(@Param('id') id): Promise<any> {
        return this.userService.delete(id);

    }

}
