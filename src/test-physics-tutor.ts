import { mastra } from './mastra';

async function testPhysicsTutor() {
  console.log('🧪 测试物理解题助手 Agent\n');

  // 测试示例 1: 简单的力学问题（文本输入）
  console.log('📝 示例 1: 文本题目\n');
  console.log('题目：一个质量为 2kg 的物体，在水平面上受到 10N 的水平拉力作用，物体与地面的摩擦系数为 0.2，重力加速度 g=10m/s²。求物体的加速度。\n');

  const response1 = await mastra.agents.physicsTutorAgent.text({
    messages: [
      {
        role: 'user',
        content: '一个质量为 2kg 的物体，在水平面上受到 10N 的水平拉力作用，物体与地面的摩擦系数为 0.2，重力加速度 g=10m/s²。求物体的加速度。',
      },
    ],
  });

  console.log('🤖 AI 回答：');
  console.log(response1.text);
  console.log('\n' + '='.repeat(80) + '\n');

  // 测试示例 2: 使用工具处理问题
  console.log('📝 示例 2: 使用物理题目工具\n');
  console.log('题目：自由落体运动，物体从 20m 高处自由下落，g=10m/s²，求落地时的速度。\n');

  const response2 = await mastra.agents.physicsTutorAgent.text({
    messages: [
      {
        role: 'user',
        content: '请帮我解答这道题：自由落体运动，物体从 20m 高处自由下落，g=10m/s²，求落地时的速度。请使用 physicsProblemTool 工具来处理。',
      },
    ],
  });

  console.log('🤖 AI 回答：');
  console.log(response2.text);
  console.log('\n' + '='.repeat(80) + '\n');

  // 测试示例 3: 电学问题
  console.log('📝 示例 3: 电学问题\n');
  console.log('题目：电阻为 5Ω 的导线，通过的电流为 2A，求导线两端的电压和 10 秒内产生的热量。\n');

  const response3 = await mastra.agents.physicsTutorAgent.text({
    messages: [
      {
        role: 'user',
        content: '电阻为 5Ω 的导线，通过的电流为 2A，求导线两端的电压和 10 秒内产生的热量。',
      },
    ],
  });

  console.log('🤖 AI 回答：');
  console.log(response3.text);
  console.log('\n' + '='.repeat(80) + '\n');
}

// 运行测试
testPhysicsTutor()
  .then(() => {
    console.log('✅ 测试完成！');
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ 测试失败：', error);
    process.exit(1);
  });
