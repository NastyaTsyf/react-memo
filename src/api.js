//Получить список лидеров

export async function getLeaders() {
  const response = await fetch(`https://wedev-api.sky.pro/api/v2/leaderboard`, { method: "GET" });
  if (!response.status === 200) {
    throw new Error("Не удалось получить список лидеров");
  }
  const data = await response.json();
  return data;
}

export async function addLeaders({ name, time, achievements }) {
  const response = await fetch(`https://wedev-api.sky.pro/api/v2/leaderboard`, {
    method: "POST",
    body: JSON.stringify({
      name,
      time,
      achievements,
    }),
  });
  if (!response.status === 201) {
    throw new Error("Не удалось добавить в список лидеров");
  } else if (response.status === 400) {
    throw new Error("Введите Ваше имя");
  }
  const data = await response.json();
  return data;
}
