/*
 * @Author: 阮志雄
 * @Date: 2022-03-29 10:44:24
 * @LastEditTime: 2022-03-29 10:44:25
 * @LastEditors: 阮志雄
 * @Description: In User Settings Edit
 * @FilePath: \nest-demo\src\auth\auth.controller.spec.ts
 */
import { Test, TestingModule } from '@nestjs/testing'
import { AuthController } from './auth.controller'

describe('AuthController', () => {
  let controller: AuthController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
    }).compile()

    controller = module.get<AuthController>(AuthController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
