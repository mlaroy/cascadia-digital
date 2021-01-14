validateForm = async () => {
    const hasEmpties = Object.keys(this.state).some(key => {
      return key !== 'error' && this.state[key] == '';
    });

    if(hasEmpties) {
      this.setState({
        error: true
      })
      return false;
    }

    const badWords = ['sex', 'hot women', 'get laid', 'ass', 'tits', ' boobs', 'shit', 'fuck'];
    const hasBadWords = badWords.some( word => {
      return this.state.message.includes(word);
    })

    if(hasBadWords) {
      this.setState({
        error: true
      })
      return false;
    }

    if(this.state.human !== '42') {
      this.setState({
        error: true
      })
      return false;
    }else{
      this.setState({
        error: false
      })
      return true;
    }
  }
