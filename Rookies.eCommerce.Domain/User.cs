﻿
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Rookies.eCommerce.Domain
{
    public class User : IdentityUser
    {
        public string? FirstName { get; set; }   
        public string? LastName { get; set; }
        public DateTime? DOB { get; set; }
        public List<Cart>? Cart { get; set; }
        public List<Order>? Order { get; set; }
    }
}
