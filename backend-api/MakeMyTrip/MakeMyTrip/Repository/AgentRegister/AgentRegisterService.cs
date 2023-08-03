using MakeMyTrip.Data;
using MakeMyTrip.Helpers;
using MakeMyTrip.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Text.RegularExpressions;
using System.Text;

namespace MakeMyTrip.Repository.AgentRegister
{
    public class AgentRegisterService : IAgents
    {
        private readonly MakeTripContext _contexts;

        public AgentRegisterService(MakeTripContext contexts)
        {
            _contexts = contexts;
        }

        //to register for agent will act as dummy
        public async Task<ActionResult> AddAgent(TravelAgent trvlagnt)
        {
            if (trvlagnt == null)
                return new BadRequestResult();

            // check email
            if (await CheckEmailExistAsync(trvlagnt.Email))
                return new BadRequestObjectResult(new { Message = "Email Already Exist" });

            //check username
            if (await CheckUsernameExistAsync(trvlagnt.Username))
                return new BadRequestObjectResult(new { Message = "Username Already Exist" });

            var passMessage = CheckPasswordStrength(trvlagnt.Password);
            if (!string.IsNullOrEmpty(passMessage))
                return new BadRequestObjectResult(new { Message = passMessage.ToString() });

            //password hash method from helper folder
            trvlagnt.Role = "TravelAgent";
            await _contexts.AddAsync(trvlagnt);
            await _contexts.SaveChangesAsync();
            return new OkObjectResult(new
            {
                Status = 200,
                Message = "TravelAgent Registered , but wait for Admin Approved!"
            });
        }

        //for register certain meathods are defined here
        //Anyasync ->import, using Microsoft.EntityFrameworkCore;

        private Task<bool> CheckEmailExistAsync(string? email)
            => _contexts.TravelAgent.AnyAsync(x => x.Email == email);

        private Task<bool> CheckUsernameExistAsync(string? username)
            => _contexts.TravelAgent.AnyAsync(x => x.Username == username);

        private static string CheckPasswordStrength(string pass)
        {
            StringBuilder sb = new StringBuilder();
            if (pass.Length < 9)
                sb.Append("Minimum password length should be 8" + Environment.NewLine);
            if (!(Regex.IsMatch(pass, "[a-z]") && Regex.IsMatch(pass, "[A-Z]") && Regex.IsMatch(pass, "[0-9]")))
                sb.Append("Password should be AlphaNumeric" + Environment.NewLine);
            if (!Regex.IsMatch(pass, "[<,>,@,!,#,$,%,^,&,*,(,),_,+,\\[,\\],{,},?,:,;,|,',\\,.,/,~,`,-,=]"))
                sb.Append("Password should contain special charcter" + Environment.NewLine);
            return sb.ToString();
        }

        
    }
}
