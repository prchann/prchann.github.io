# grep

```sh
# or
egrep 'pattern1|pattern2' access.log

# and
egrep 'p1.*p2|p2.*p1' access.log

# not
egrep -v 'p1' access.log
```
