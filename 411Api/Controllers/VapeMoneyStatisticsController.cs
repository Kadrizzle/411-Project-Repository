using _411Api.Models;
using _411Api.Services;
using Microsoft.AspNetCore.Mvc;

namespace _411Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class VapeMoneyStatisticsController : ControllerBase
    {
        private readonly VapeMoneyStatisticsService _vapeMoneyStatisticsService;

        public VapeMoneyStatisticsController(VapeMoneyStatisticsService vapeMoneyStatisticsService) =>
            _vapeMoneyStatisticsService = vapeMoneyStatisticsService;

        [HttpGet]
        public async Task<List<VapeMoneyStatistic>> Get() =>
            await _vapeMoneyStatisticsService.GetAsync();

        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<VapeMoneyStatistic>> Get(string id)
        {
            var vapeMoneyStatistic = await _vapeMoneyStatisticsService.GetAsync(id);

            if (vapeMoneyStatistic is null)
            {
                return NotFound();
            }

            return vapeMoneyStatistic;
        }

        [HttpPost]
        public async Task<IActionResult> Post(VapeMoneyStatistic newVapeMoneyStatistic)
        {
            await _vapeMoneyStatisticsService.CreateAsync(newVapeMoneyStatistic);

            return CreatedAtAction(nameof(Get), new
            {
                id = newVapeMoneyStatistic.Id,
                moneySpentOnVape = newVapeMoneyStatistic.MoneySpentOnVape,
                dateVapeWasBought = newVapeMoneyStatistic.DateVapeWasBought,
                userId = newVapeMoneyStatistic.UserId
            },
                newVapeMoneyStatistic);
        }

        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> Update(string id, VapeMoneyStatistic updatedVapeMoneyStatistic)
        {
            var vapeMoneyStatistic = await _vapeMoneyStatisticsService.GetAsync(id);

            if (vapeMoneyStatistic is null)
            {
                return NotFound();
            }

            updatedVapeMoneyStatistic.Id = vapeMoneyStatistic.Id;

            await _vapeMoneyStatisticsService.UpdateAsync(id, updatedVapeMoneyStatistic);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            var vapeMoneyStatistic = await _vapeMoneyStatisticsService.GetAsync(id);

            if (vapeMoneyStatistic is null)
            {
                return NotFound();
            }

            await _vapeMoneyStatisticsService.RemoveAsync(id);

            return NoContent();
        }
    }
}
