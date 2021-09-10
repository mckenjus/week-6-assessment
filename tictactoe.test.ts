import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

// test('I can select the middle right cell', async () => {

//     let button = await (await driver).findElement(By.id('start-game'));
//     await button.click();
//     let board = await (await driver).findElement(By.id('cell-5'))
//     await board.click()
//     await driver.sleep(3000)
// })
test('user can beat the computer', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    let move1 = await (await driver).findElement(By.id('cell-2'))
    await move1.click()
    await driver.sleep(0)
    let move2 = await (await driver).findElement(By.id('cell-4'))
    await move2.click()
    await driver.sleep(0)
    let move3 = await (await driver).findElement(By.id('cell-6'))
    await move3.click()
    await driver.sleep(0)
    expect
})
