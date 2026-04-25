# Type-Level Date/Time

Type-level date and time operations.

## Overview

The `datetime` module provides type-level date and time utilities, including date types, time types, arithmetic operations, formatting, timezone support, and more.

## Date Types

### DateString / ISODate

```ts
import type { DateString, ISODate, ISODateTime, UnixTimestamp } from 'uni-types'

type DateStr = DateString<'2024-01-15'>
type ISO = ISODate<'2024-01-15'> // valid ISO date
type ISODT = ISODateTime<'2024-01-15T10:30:00'> // valid ISO datetime
type Unix = UnixTimestamp // number
```

### DateComponents

```ts
import type { DateComponents, Year, Month, Day } from 'uni-types'

interface MyDate extends DateComponents {
  year: 2024
  month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  day: 15
  hours: 10
  minutes: 30
  seconds: 0
}
```

## Time Types

### TimeString / Duration

```ts
import type { TimeString, Duration, DurationString, TimeUnit } from 'uni-types'

type Time = TimeString<'10:30:00'> // valid time string

interface MyDuration extends Duration {
  hours: 2
  minutes: 30
  seconds: 0
}

type Unit = TimeUnit // 'ms' | 's' | 'm' | 'h' | 'd' | 'w' | 'M' | 'y'
```

## Date Arithmetic

### Add / Subtract

```ts
import type {
  AddDays, AddMonths, AddYears,
  SubtractDays, SubtractMonths, SubtractYears
} from 'uni-types'

type Tomorrow = AddDays<'2024-01-15', 1> // string
type NextMonth = AddMonths<'2024-01-15', 1> // string
type LastYear = SubtractYears<'2024-01-15', 1> // string
```

## Date Comparison

### DateDiff

```ts
import type { DateDiff, DaysBetween, MonthsBetween, YearsBetween } from 'uni-types'

interface Diff extends DateDiff {
  years: 1
  months: 2
  days: 15
  totalDays: 440
  totalHours: 10560
}

type Days = DaysBetween<'2024-01-15', '2025-03-30'> // number
```

### DateComparison

```ts
import type { DateComparison } from 'uni-types'

type Result = DateComparison // 'before' | 'after' | 'equal'
```

## Date Validation

### IsValidDate / IsWeekend / IsLeapYear

```ts
import type { IsValidDate, IsWeekend, IsWeekday, IsLeapYear } from 'uni-types'

type Valid = IsValidDate<'2024-01-15'> // boolean
type Weekend = IsWeekend<'2024-01-15'> // boolean
type Leap = IsLeapYear<2024> // boolean
```

### DayOfWeek / Quarter

```ts
import type { DayOfWeek, DayOfYear, WeekOfYear, Quarter } from 'uni-types'

type Day = DayOfWeek // 'monday' | 'tuesday' | ... | 'sunday'
type Q = Quarter // 1 | 2 | 3 | 4
```

## Date Formatting

### FormatDate

```ts
import type { FormatDate, ParseDate, DateFormat, TimeFormat } from 'uni-types'

type Formatted = FormatDate<'2024-01-15', 'YYYY-MM-DD'>
type Format = DateFormat // 'YYYY-MM-DD' | 'MM/DD/YYYY' | 'DD/MM/YYYY' | ...
type TFormat = TimeFormat // 'HH:mm:ss' | 'HH:mm' | 'hh:mm:ss A' | ...
```

## Timezone Types

### Timezone

```ts
import type { Timezone, CommonTimezone, UTCTime, LocalTime } from 'uni-types'

type TZ = Timezone // string
type Common = CommonTimezone // 'UTC' | 'America/New_York' | 'Europe/London' | ...
type UTC = UTCTime<string>
type Local = LocalTime<string, 'America/New_York'>
```

### ConvertTimezone

```ts
import type { ConvertTimezone, TimezoneOffset } from 'uni-types'

type Converted = ConvertTimezone<'2024-01-15T10:00:00', 'UTC', 'America/New_York'>
type Offset = TimezoneOffset<'America/New_York'> // string
```

## Relative Time

### RelativeTime

```ts
import type { RelativeTime, HumanDuration } from 'uni-types'

type Relative = RelativeTime // 'now' | 'today' | 'tomorrow' | 'yesterday' | ...
```

## Date Range

### DateRange

```ts
import type { DateRange, DateInterval, RecurrenceRule } from 'uni-types'

interface Range extends DateRange {
  start: '2024-01-01'
  end: '2024-12-31'
}

interface Rule extends RecurrenceRule {
  frequency: 'daily'
  interval: 1
  count?: 30
}
```

## Business Days

```ts
import type { BusinessDayConfig, AddBusinessDays, IsBusinessDay } from 'uni-types'

interface Config extends BusinessDayConfig {
  weekends: ['saturday', 'sunday']
  holidays: ['2024-01-01', '2024-12-25']
  workHours: { start: '09:00', end: '17:00' }
}
```

## API Reference

| Type | Description |
|------|-------------|
| `DateString<T>` | Date string type |
| `ISODate<T>` | ISO date format |
| `ISODateTime<T>` | ISO datetime format |
| `DateComponents` | Date components |
| `Duration` | Duration type |
| `AddDays<T, N>` | Add days |
| `SubtractDays<T, N>` | Subtract days |
| `DateDiff` | Date difference |
| `IsValidDate<T>` | Valid date check |
| `IsLeapYear<T>` | Leap year check |
| `DateFormat` | Date format type |
| `Timezone` | Timezone type |
| `ConvertTimezone<T, From, To>` | Convert timezone |
| `DateRange<T>` | Date range |
| `RecurrenceRule` | Recurrence rule |