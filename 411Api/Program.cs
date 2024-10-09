using _411Api.Models;
using _411Api.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.Configure<_411DatabaseSettings>(
    builder.Configuration.GetSection("411DatabaseInfo"));

builder.Services.AddSingleton<VapesService>();
builder.Services.AddSingleton<UserService>();
builder.Services.AddSingleton<VapeMoneyStatisticsService>();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
