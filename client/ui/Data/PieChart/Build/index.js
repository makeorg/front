// @flow
import { type ElementRef } from 'react';
import { type PieChartDataType } from 'Shared/types/question';
import {
  getPercentDeltaY,
  getLabelDeltaY,
  getItemDeltaX,
  setCanvasStyles,
  getSublabelDeltaY,
  setPercentAsLabel,
  setMainLabel,
  setSubLabel,
} from './helpers';

export const buildPieChart = (
  ref: ElementRef<any>,
  data: PieChartDataType[],
  isMobile: boolean
) => {
  const canvas: HTMLCanvasElement = ref.current;
  const ctx = canvas.getContext('2d');
  canvas.width = isMobile ? 300 : 500;
  canvas.height = isMobile ? 300 : 400;
  const total = data.reduce((ttl, item) => {
    return ttl + item.percent;
  }, 0);
  let startAngle = 4.725;
  const radius = isMobile ? 75 : 100;
  const cx = canvas.width / 2;
  const cy = canvas.height / 2;
  const labelYOffset = 0.125;
  const sublabelYOffset = 0.225;
  const labelCy = canvas.height / (2 - labelYOffset);
  const sublabelCy = canvas.height / (2 - sublabelYOffset);

  data.map(item => {
    // define adjustLabel const
    const hasASublabel = item.sublabel;
    // draw the pie wedges
    const endAngle = (item.percent / total) * Math.PI * 2 + startAngle;
    // midpoint between the two angles
    const theta = (startAngle + endAngle) / 2;
    // 1.5 * radius is the length of the Hypotenuses
    const deltaY = Math.sin(theta) * 1.5 * radius;
    const deltaX = Math.cos(theta) * 1.5 * radius;

    // set XAxis position
    const itemDeltaX = getItemDeltaX(item, canvas, deltaX, cx);

    // set yAxis position
    const percentDeltaY = getPercentDeltaY(item, canvas, deltaY, cy);
    const labelDeltaY = getLabelDeltaY(
      item,
      canvas,
      deltaY,
      labelYOffset,
      labelCy
    );
    const sublabelDeltaY = getSublabelDeltaY(
      item,
      canvas,
      deltaY,
      sublabelYOffset,
      sublabelCy
    );

    // set the styles before beginPath
    setCanvasStyles(ctx, item, cx, cy, radius, startAngle, endAngle);

    // add the percent as label
    setPercentAsLabel(ctx, item, itemDeltaX, percentDeltaY, isMobile);

    // add the label
    setMainLabel(ctx, item, itemDeltaX, labelDeltaY, isMobile);

    // add the sublabel if the element has one
    if (hasASublabel) {
      setSubLabel(ctx, item, itemDeltaX, sublabelDeltaY, isMobile);
    }

    ctx.closePath();

    startAngle = endAngle;
    return null;
  });
};
