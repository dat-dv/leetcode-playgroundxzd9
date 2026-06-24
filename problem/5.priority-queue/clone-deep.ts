function cloneDeep(data, target) {
  if (data === null || data === undefined) return data;

  const dataType = typeof data;
  // Các giá trị có thể trả về (lưu ý viết thường toàn bộ):
  // "string", "number", "boolean", "function", "object", "symbol", "undefined", "bigint"

  if (dataType !== 'object' && dataType !== 'function') {
    // string, number, boolean, ...
    return data;
  }

  // cần xử lý 2 trường hợp này : "function", "object"
  // object sẽ có thể là array, map, date, object thường...
  const isArray = Array.isArray(data);
  if (isArray) {
    return data.map((item) => cloneDeep(item));
  }

  const isDate = data instanceof Date;
  if (isDate) {
    return new Date(data.getTime());
  }

  const isFunction = data instanceof Function;
  if (isFunction) {
    return data.bind(target);
  }

  const isMap = data instanceof Map;
  if (isMap) {
    const arr = Array.from(data);
    const newMap = arr.map(([key, value]) => [
      cloneDeep(key),
      cloneDeep(value),
    ]);
    return new Map(arr);
  }

  const isSet = data instanceof Set;
  if (isSet) {
    const arr = Array.from(data);
    const newData = arr.map((d) => cloneDeep(d));
    return new Set(newData);
  }

  if (typeof data === 'object') {
    const obj = {};
    Object.keys(data).forEach((key) => {
      obj[key] = cloneDeep(data[key], obj);
    });
    return obj;
  }

  throw new Error('Unsupported type');
}

const admin = {
  name: 'Sếp',
  banUser: function () {
    console.log(`Tài khoản ${this.name} vừa thực hiện lệnh ban!`);
  },
};

const clone = cloneDeep(admin);
console.log(admin === clone);
admin.banUser();
clone.banUser();
console.log(
  clone.banUser === admin.banUser,
  ' -> Compare banUser clone và admin'
);

function m1() {
  console.log(`Đây là hàm không có context this ~ mặc định this là window`);
}

const m2 = cloneDeep(m1);
console.log(m2 === m1, ' -> Compare m2 và m1');
