export let set = (data) => ({ type: 'set', data})
export let add = (news) => ({ type: 'add', news})
export let edit = (id, news) => ({ type: 'edit', id, news })
export let del = (id) => ({ type:'del',id})