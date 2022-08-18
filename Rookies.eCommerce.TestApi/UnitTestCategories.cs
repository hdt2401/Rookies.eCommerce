using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Moq;
using Rookies.eCommerce.Controllers;
using Rookies.eCommerce.Data;
using Rookies.eCommerce.Domain;

namespace Rookies.eCommerce.TestApi
{
    public class UnitTestCategories
    {
        //[Fact]
        //public async void Test_GET_AllCategories()
        //{
        //    //create In Memory Database
        //    var options = new DbContextOptionsBuilder<EFContext>()
        //        .UseInMemoryDatabase(databaseName: Guid.NewGuid().ToString()).Options;
        //    using (var _context = new EFContext(options))
        //    {
        //        _context.Categories.Add(new Category
        //        {
        //            Id = 1,
        //            Name = "phone",
        //            CreatedDate = DateTime.Now,
        //            UpdatedDate = DateTime.Now,
        //            Description = "dien thoai"
        //        });
        //        _context.Categories.Add(new Category
        //        {
        //            Id = 2,
        //            Name = "table",
        //            CreatedDate = DateTime.Now,
        //            UpdatedDate = DateTime.Now,
        //            Description = "may tinh bang",
        //        });
        //        _context.SaveChanges();
        //    }

        //    //Arrange
        //    var mockContext = new EFContext(options);
        //    var controller = new CategoryController(mockContext);

        //    //Action
        //    var result = await controller.GetAll();

        //    // Assert
        //    var model = Assert.IsType<ActionResult<List<Category>>>(result);
        //    //var res = Assert.IsAssignableFrom<Category>(model.Value);
        //    var res = Assert.IsAssignableFrom<OkObjectResult>(model.Result);

        //    Assert.Equal(200, res.StatusCode);
        //}

        //[Fact]
        //public async void Test_GET_ACategory()
        //{
        //    //create In Memory Database
        //    var options = new DbContextOptionsBuilder<EFContext>()
        //        .UseInMemoryDatabase(databaseName: Guid.NewGuid().ToString()).Options;
        //    using (var _context = new EFContext(options))
        //    {
        //        _context.Categories.Add(new Category
        //        {
        //            Id = 1,
        //            Name = "phone",
        //            CreatedDate = DateTime.Now,
        //            UpdatedDate = DateTime.Now,
        //            Description = "dien thoai"
        //        });
        //        _context.Categories.Add(new Category
        //        {
        //            Id = 2,
        //            Name = "table",
        //            CreatedDate = DateTime.Now,
        //            UpdatedDate = DateTime.Now,
        //            Description = "may tinh bang",
        //        });
        //        _context.SaveChanges();
        //    }

        //    //Arrange
        //    var mockContext = new EFContext(options);
        //    var controller = new CategoryController(mockContext);

        //    //Action
        //    var result = await controller.GetCategory(1);

        //    // Assert
        //    var actionResult = Assert.IsType<ActionResult<Category>>(result);
        //    var res = Assert.IsType<OkObjectResult>(actionResult.Result);

        //    Assert.Equal(200, res.StatusCode);
        //}

        //[Fact]
        //public async void Test_Post_ACategory()
        //{
        //    //create In Memory Database
        //    var options = new DbContextOptionsBuilder<EFContext>()
        //        .UseInMemoryDatabase(databaseName: Guid.NewGuid().ToString()).Options;
        //    using (var _context = new EFContext(options))
        //    {
        //        _context.Categories.Add(new Category
        //        {
        //            Id = 1,
        //            Name = "phone",
        //            CreatedDate = DateTime.Now,
        //            UpdatedDate = DateTime.Now,
        //            Description = "dien thoai"
        //        });
        //        _context.Categories.Add(new Category
        //        {
        //            Id = 2,
        //            Name = "table",
        //            CreatedDate = DateTime.Now,
        //            UpdatedDate = DateTime.Now,
        //            Description = "may tinh bang",
        //        });
        //        _context.SaveChanges();
        //    }

        //    //Arrange
        //    var mockContext = new EFContext(options);
        //    var controller = new CategoryController(mockContext);

        //    //Action
        //    var result = await controller.AddCategory(
        //        new Category
        //        {
        //            Id = 3,
        //            Name = "Laptop",
        //            CreatedDate = DateTime.Now,
        //            UpdatedDate = DateTime.Now,
        //            Description = "may tinh ca nhan",
        //        }
        //        );

        //    // Assert
        //    var actionResult = Assert.IsType<ActionResult<Category>>(result);
        //    var res = Assert.IsType<OkObjectResult>(actionResult.Result);

        //    Assert.Equal(200, res.StatusCode);
        //}

        //[Fact]
        //public async void Test_Push_ACategory()
        //{
        //    //create In Memory Database
        //    var options = new DbContextOptionsBuilder<EFContext>()
        //        .UseInMemoryDatabase(databaseName: Guid.NewGuid().ToString()).Options;
        //    using (var _context = new EFContext(options))
        //    {
        //        _context.Categories.Add(new Category
        //        {
        //            Id = 1,
        //            Name = "phone",
        //            CreatedDate = DateTime.Now,
        //            UpdatedDate = DateTime.Now,
        //            Description = "dien thoai"
        //        });
        //        _context.Categories.Add(new Category
        //        {
        //            Id = 2,
        //            Name = "table",
        //            CreatedDate = DateTime.Now,
        //            UpdatedDate = DateTime.Now,
        //            Description = "may tinh bang",
        //        });
        //        _context.SaveChanges();
        //    }

        //    //Arrange
        //    var mockContext = new EFContext(options);
        //    var controller = new CategoryController(mockContext);

        //    //Action
        //    var result = await controller.UpdateCategory(2,
        //        new Category
        //        {
        //            Id = 2,
        //            Name = "Laptop moi",
        //            CreatedDate = DateTime.Now,
        //            UpdatedDate = DateTime.Now,
        //            Description = "may tinh ca nhan moi",
        //        }
        //        );

        //    // Assert
        //    var actionResult = Assert.IsType<ActionResult<Category>>(result);
        //    var res = Assert.IsType<NoContentResult>(actionResult.Result);

        //    Assert.Equal(204, res.StatusCode);
        //}

        //[Fact]
        //public async void Test_Delete_ACategory()
        //{
        //    //create In Memory Database
        //    var options = new DbContextOptionsBuilder<EFContext>()
        //        .UseInMemoryDatabase(databaseName: Guid.NewGuid().ToString()).Options;
        //    using (var _context = new EFContext(options))
        //    {
        //        _context.Categories.Add(new Category
        //        {
        //            Id = 1,
        //            Name = "phone",
        //            CreatedDate = DateTime.Now,
        //            UpdatedDate = DateTime.Now,
        //            Description = "dien thoai"
        //        });
        //        _context.Categories.Add(new Category
        //        {
        //            Id = 2,
        //            Name = "table",
        //            CreatedDate = DateTime.Now,
        //            UpdatedDate = DateTime.Now,
        //            Description = "may tinh bang",
        //        });
        //        _context.SaveChanges();
        //    }

        //    //Arrange
        //    var mockContext = new EFContext(options);
        //    var controller = new CategoryController(mockContext);

        //    //Action
        //    var result = await controller.DeleteCategory(1);

        //    // Assert            
        //    var res = Assert.IsType<NoContentResult>(result);

        //    Assert.Equal(204, res.StatusCode);
        //}
    }
}