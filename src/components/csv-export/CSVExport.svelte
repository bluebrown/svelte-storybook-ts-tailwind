<script>
  export let data = [];
  let dataRef = ''
  $: if (data.length > 0) {
    const [head, ...body] = data
    dataRef =
      'data:text/csv;charset=utf-8,' +
      encodeURI(
        (head.map ? head : Object.keys(head)).map((k) => `"${k}"`).join(',') + '\n' +
        body.map((obj) => (obj.map ? obj : Object.values(obj)).map((v) => `"${v}"`).join(',')).join('\n')
      );
    }
</script>

<a ref="download" target="_blank" download="output.csv" href={dataRef}>download CSV</a>
