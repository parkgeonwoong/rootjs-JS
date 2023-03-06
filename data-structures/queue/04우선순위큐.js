/**
 * @desc : 우선순위 큐
 * - 원소가 우선순위에 따라 추가되고 삭제됨
 * 여기서 우선순위를 설정해 원소를 정확한 위치에 추가하는 것
 */

function PriorityQueue() {
  let items = [];

  function QueueElement(element, priority) {
    this.element = element;
    this.priority = priority;
  }

  this.enqueue = function (element, priority) {
    let queueElement = new QueueElement(element, priority);

    if (this.isEmpty()) {
      items.push(queueElement);
    } else {
      let added = false;
      for (let i = 0; i < items.length; i++) {
        if (queueElement.priority < items[i].priority) {
          items.splice(i, 0, queueElement);
          added = true;
          break;
        }
      }
      if (!added) {
        items.push(queueElement);
      }
    }
  };

  this.dequeue = function () {
    return items.shift();
  };
  this.front = function () {
    return items[0];
  };

  this.isEmpty = function () {
    return items.length === 0;
  };

  this.size = function () {
    return items.length;
  };

  this.clear = function () {
    items = [];
  };

  this.print = function () {
    console.log(items);
  };
}

const priority = new PriorityQueue();
priority.enqueue("john", 2);
priority.enqueue("park", 1);
priority.enqueue("woong", 1);
priority.print();
