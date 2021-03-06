require('./format')

function CGA(attrs, rules) {
  this.attrs = attrs;
  this.rules = rules;
}

CGA.prototype.toString = function() {
  return 'CGA( {attr}, {rules})'.format( { attr: JSON.stringify(this.attrs), rules: this.rules } );
};

function Rule(name, successors) {
  this.name = name;
  this.successors = successors;
}

Rule.prototype.toString = function() {
  return 'Rule( {name}, {successors} )'.format( { name: this.name,
                                                  successors: this.successors instanceof Array ? this.successors.map(JSON.stringify) : this.successors});
};

function Stochastic(parts) { this.parts = parts; }
Stochastic.prototype.toString = function() {
  return 'Stochastic({parts})'.format(this);
};


function Relative(value) { this.value = value; }
Relative.prototype.toString = function() {
  return 'Relative({value})'.format(this);
};


function Axis(value) { this.value = value; }
Axis.prototype.toString = function() {
  return 'Axis({value})'.format(this);
};

function CompSelector(value) { this.value = value; }
CompSelector.prototype.toString = function() {
  return 'CompSelector({value})'.format(this);
};


function Floating(value) { this.value = value; }
Floating.prototype.toString = function() {
  return 'Floating({value})'.format(this);
};


function Function(name, params, body) { this.name = name; this.params = params; this.body = body;}
Function.prototype.toString = function() {
  return 'Function({name}, {params}, {body})'.format(this);
};

function Body(parts, repeat) { this.parts = parts; this.repeat = repeat;  }
Body.prototype.toString = function() {
  return 'Body({parts}, {repeat})'.format(this);
};

function OpBlock(head, op, operations) { this.head = head; this.op = op; this.operations = operations; }
OpBlock.prototype.toString = function() {
  return 'OpBlock({head}, {op}, {operations})'.format(this);
};

function AttrRef(obj, field) { this.obj = obj; this.field = field; }
AttrRef.prototype.toString = function() {
  return 'AttrRef({obj}, {field})'.format(this);
};
AttrRef.prototype.set = function (res, val) {
    if (this.field) {
      if (!res[this.obj]) res[this.obj] = {};
      res[this.obj][this.field] = val;
    } else {
      res[this.obj] = val;
    }
};



module.exports = {
  CGA: CGA,
  Rule: Rule,
  Relative: Relative,
  Floating: Floating,
  Function: Function,
  Body: Body,
  OpBlock: OpBlock,
  Axis: Axis,
  AttrRef: AttrRef,
  CompSelector: CompSelector,
  Stochastic: Stochastic,
};
