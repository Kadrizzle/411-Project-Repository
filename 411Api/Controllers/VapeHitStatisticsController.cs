using _411Api.Models;
using _411Api.Services;
using Microsoft.AspNetCore.Mvc;

namespace _411Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class VapeHitStatisticsController : ControllerBase
    {
        private readonly VapeHitStatisticsService _vapeHitStatisticsService;

        public VapeHitStatisticsController(VapeHitStatisticsService vapeHitStatisticsService) =>
            _vapeHitStatisticsService = vapeHitStatisticsService;

        [HttpGet]
        public async Task<List<VapeHitStatistic>> Get() =>
            await _vapeHitStatisticsService.GetAsync();

        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<VapeHitStatistic>> Get(string id)
        {
            var vapeHitStatistic = await _vapeHitStatisticsService.GetAsync(id);

            if (vapeHitStatistic is null)
            {
                return NotFound();
            }

            return vapeHitStatistic;
        }

        [HttpPost]
        public async Task<IActionResult> Post(VapeHitStatistic newVapeHitStatistic)
        {
            await _vapeHitStatisticsService.CreateAsync(newVapeHitStatistic);

            return CreatedAtAction(nameof(Get), new
            {
                id = newVapeHitStatistic.Id,
                vapeHit = newVapeHitStatistic.VapeHit,
                dateVapeWasHit = newVapeHitStatistic.DateVapeWasHit,
                userId = newVapeHitStatistic.UserId
            },
                newVapeHitStatistic);
        }

        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> Update(string id, VapeHitStatistic updatedVapeHitStatistic)
        {
            var vapeHitStatistic = await _vapeHitStatisticsService.GetAsync(id);

            if (vapeHitStatistic is null)
            {
                return NotFound();
            }

            updatedVapeHitStatistic.Id = vapeHitStatistic.Id;

            await _vapeHitStatisticsService.UpdateAsync(id, updatedVapeHitStatistic);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            var vapeHitStatistic = await _vapeHitStatisticsService.GetAsync(id);

            if (vapeHitStatistic is null)
            {
                return NotFound();
            }

            await _vapeHitStatisticsService.RemoveAsync(id);

            return NoContent();
        }
    }
}
