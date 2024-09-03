using _411Api.Models;
using _411Api.Services;
using Microsoft.AspNetCore.Mvc;

namespace _411Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class VapesController : ControllerBase
    {
        private readonly VapesService _vapesService;

        public VapesController(VapesService vapesService) =>
            _vapesService = vapesService;

        [HttpGet]
        public async Task<List<Vape>> Get() =>
            await _vapesService.GetAsync();

        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<Vape>> Get(string id)
        {
            var vape = await _vapesService.GetAsync(id);

            if (vape is null)
            {
                return NotFound();
            }

            return vape;
        }

        [HttpPost]
        public async Task<IActionResult> Post(Vape newVape)
        {
            await _vapesService.CreateAsync(newVape);

            return CreatedAtAction(nameof(Get), new { 
                id = newVape.Id, 
                name = newVape.Name, 
                companyName = newVape.CompanyName, 
                nicotineConcentration = newVape.NicotineConcentration },
                newVape);
        }

        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> Update(string id, Vape updatedVape)
        {
            var vape = await _vapesService.GetAsync(id);

            if (vape is null)
            {
                return NotFound();
            }

            updatedVape.Id = vape.Id;

            await _vapesService.UpdateAsync(id, updatedVape);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            var vape = await _vapesService.GetAsync(id);

            if (vape is null)
            {
                return NotFound();
            }

            await _vapesService.RemoveAsync(id);

            return NoContent();
        }
    }
}
