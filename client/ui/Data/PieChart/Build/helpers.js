// @flow
import { color } from 'athena-design-tokens';
import { type PieChartDataType } from 'Shared/types/question';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';

const offsetCanvasValue = (canvasValue: number, offset: number) => {
  const value = offset > 0 ? canvasValue / offset : 0;
  return value;
};

export const getItemDeltaX = (
  item: PieChartDataType,
  canvas: HTMLCanvasElement,
  deltaX: number,
  cx: number
) => {
  const isXAxisAdjusted = item.adjustLabel && item.adjustLabel.xAxis;
  const itemDeltaX = isXAxisAdjusted
    ? deltaX + offsetCanvasValue(canvas.width, isXAxisAdjusted)
    : deltaX + cx;

  return itemDeltaX;
};

export const getPercentDeltaY = (
  item: PieChartDataType,
  canvas: HTMLCanvasElement,
  deltaY: number,
  cy: number
) => {
  const isYAxisAdjusted = item.adjustLabel && item.adjustLabel.yAxis;
  const percentDeltaY = isYAxisAdjusted
    ? deltaY + offsetCanvasValue(canvas.height, isYAxisAdjusted)
    : deltaY + cy;

  return percentDeltaY;
};

export const getLabelDeltaY = (
  item: PieChartDataType,
  canvas: HTMLCanvasElement,
  deltaY: number,
  labelYOffset: number,
  labelCy: number
) => {
  const isYAxisAdjusted = item.adjustLabel && item.adjustLabel.yAxis;
  const labelDeltaY = isYAxisAdjusted
    ? deltaY + offsetCanvasValue(canvas.height, isYAxisAdjusted - labelYOffset)
    : deltaY + labelCy;

  return labelDeltaY;
};

export const getSublabelDeltaY = (
  item: PieChartDataType,
  canvas: HTMLCanvasElement,
  deltaY: number,
  sublabelYOffset: number,
  sublabelCy: number
) => {
  const isYAxisAdjusted = item.adjustLabel && item.adjustLabel.yAxis;
  const sublabelDeltaY = isYAxisAdjusted
    ? deltaY +
      offsetCanvasValue(canvas.height, isYAxisAdjusted - sublabelYOffset)
    : deltaY + sublabelCy;

  return sublabelDeltaY;
};

export const setCanvasStyles = (
  ctx: any,
  item: PieChartDataType,
  cx: number,
  cy: number,
  radius: number,
  startAngle: number,
  endAngle: number
) => {
  ctx.fillStyle = item.color;
  ctx.beginPath();

  ctx.moveTo(cx, cy);
  ctx.arc(cx, cy, radius, startAngle, endAngle, false);
  ctx.lineTo(cx, cy);
  ctx.fill();
  ctx.closePath();
};

export const setPercentAsLabel = (
  ctx: any,
  item: PieChartDataType,
  itemDeltaX: number,
  percentDeltaY: number,
  isMobile: boolean
) => {
  const isTextAlignAdjusted = item.adjustLabel && item.adjustLabel.textAlign;
  const hidePercentLabel = item.adjustLabel && item.adjustLabel.hidePercent;

  ctx.beginPath();
  ctx.font = isMobile
    ? `10px ${MakeFonts.CircularStandardBold}`
    : `15px ${MakeFonts.CircularStandardBold}`;
  ctx.textAlign = isTextAlignAdjusted || 'center';
  ctx.fillStyle = color.black;
  ctx.fillText(
    hidePercentLabel ? item.label : `${item.percent}%`,
    itemDeltaX,
    percentDeltaY
  );
};

export const setMainLabel = (
  ctx: any,
  item: PieChartDataType,
  itemDeltaX: number,
  labelDeltaY: number,
  isMobile: boolean
) => {
  const isTextAlignAdjusted = item.adjustLabel && item.adjustLabel.textAlign;
  const hidePercentLabel = item.adjustLabel && item.adjustLabel.hidePercent;

  ctx.beginPath();
  ctx.font = isMobile
    ? `8px ${MakeFonts.CircularStandardBook}`
    : `11px ${MakeFonts.CircularStandardBook}`;
  ctx.textAlign = isTextAlignAdjusted || 'center';
  ctx.fillStyle = color.black;
  ctx.fillText(hidePercentLabel ? '' : item.label, itemDeltaX, labelDeltaY);
};

export const setSubLabel = (
  ctx: any,
  item: PieChartDataType,
  itemDeltaX: number,
  sublabelDeltaY: number,
  isMobile: boolean
) => {
  const isTextAlignAdjusted = item.adjustLabel && item.adjustLabel.textAlign;

  ctx.beginPath();
  ctx.font = isMobile
    ? `8px ${MakeFonts.CircularStandardBook}`
    : `11px ${MakeFonts.CircularStandardBook}`;
  ctx.textAlign = isTextAlignAdjusted || 'center';
  ctx.fillStyle = color.black;
  ctx.fillText(item.sublabel, itemDeltaX, sublabelDeltaY);
};
