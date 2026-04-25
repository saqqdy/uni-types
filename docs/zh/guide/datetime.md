# 类型级日期时间

类型级别的日期时间操作。

## 概述

`datetime` 模块提供类型级别的日期时间工具，包括日期类型、时间类型、算术操作、格式化、时区支持等。

## 日期类型

### DateString / ISODate

```ts
import type { DateString, ISODate, ISODateTime } from 'uni-types'

type DateStr = DateString<'2024-01-15'>
type ISO = ISODate<'2024-01-15'>
type ISODT = ISODateTime<'2024-01-15T10:30:00'>
```

### DateComponents

```ts
import type { DateComponents, Year, Month, Day } from 'uni-types'

interface MyDate extends DateComponents {
  year: 2024
  month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  day: 15
}
```

## 时间类型

### Duration

```ts
import type { Duration, TimeUnit } from 'uni-types'

interface MyDuration extends Duration {
  hours: 2
  minutes: 30
}
```

## 日期算术

### Add / Subtract

```ts
import type { AddDays, AddMonths, SubtractDays } from 'uni-types'

type Tomorrow = AddDays<'2024-01-15', 1>
type LastYear = SubtractYears<'2024-01-15', 1>
```

## 日期比较

```ts
import type { DateDiff, DaysBetween } from 'uni-types'

type Days = DaysBetween<'2024-01-15', '2025-03-30'>
```

## 日期验证

```ts
import type { IsValidDate, IsLeapYear, DayOfWeek, Quarter } from 'uni-types'

type Valid = IsValidDate<'2024-01-15'>
type Leap = IsLeapYear<2024>
type Day = DayOfWeek // 'monday' | 'tuesday' | ...
```

## 时区类型

```ts
import type { Timezone, CommonTimezone, ConvertTimezone } from 'uni-types'

type Common = CommonTimezone // 'UTC' | 'America/New_York' | ...
```

## API 参考

| 类型 | 描述 |
|------|------|
| `DateString<T>` | 日期字符串类型 |
| `ISODate<T>` | ISO 日期格式 |
| `Duration` | 持续时间类型 |
| `AddDays<T, N>` | 添加天数 |
| `DateDiff` | 日期差异 |
| `IsValidDate<T>` | 有效日期检查 |
| `DateFormat` | 日期格式类型 |
| `Timezone` | 时区类型 |
| `DateRange<T>` | 日期范围 |